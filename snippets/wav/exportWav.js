// Minimal WAV export from float32 PCM
// Provide a Float32Array (mono) and sampleRate

export function encodeWavPCM16(float32, sampleRate){
  const len = float32.length;
  const buffer = new ArrayBuffer(44 + len * 2);
  const view = new DataView(buffer);

  function writeString(off, s){ for(let i=0;i<s.length;i++) view.setUint8(off+i, s.charCodeAt(i)); }
  function clampSample(v){ v = Math.max(-1, Math.min(1, v)); return v < 0 ? v * 0x8000 : v * 0x7FFF; }

  // RIFF/WAVE header
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + len*2, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);      // PCM chunk size
  view.setUint16(20, 1, true);       // audio format (PCM)
  view.setUint16(22, 1, true);       // num channels (mono)
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true); // byte rate
  view.setUint16(32, 2, true);       // block align
  view.setUint16(34, 16, true);      // bits per sample
  writeString(36, 'data');
  view.setUint32(40, len*2, true);

  // PCM samples
  let offset = 44;
  for(let i=0;i<len;i++){
    const s = clampSample(float32[i]);
    view.setInt16(offset, s, true);
    offset += 2;
  }

  return new Blob([view], { type: 'audio/wav' });
}

export function exportWavFromBuffer(float32, sampleRate){
  const blob = encodeWavPCM16(float32, sampleRate);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ask-report-${Date.now()}.wav`;
  a.click();
  URL.revokeObjectURL(url);
}

