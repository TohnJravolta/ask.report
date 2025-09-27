// Canvas + Audio recording via MediaRecorder
// Assumes you have: canvas, ac (AudioContext), analyser or audio graph nodes

export function createRecorderDeps({ canvas, ac, analyser }){
  const hasMediaRecorder = 'MediaRecorder' in window;
  const result = { supported: hasMediaRecorder };
  if (!hasMediaRecorder) return result;

  const canvasStream = canvas.captureStream(60);
  let mixed = canvasStream;
  if (ac && analyser) {
    const dest = ac.createMediaStreamDestination();
    analyser.connect(dest);
    mixed = new MediaStream([...canvasStream.getVideoTracks(), ...dest.stream.getAudioTracks()]);
  }
  return { supported: true, stream: mixed };
}

export function makeToggleRecording({ deps, onToast }){
  let mediaRec = null;
  let recChunks = [];
  function saveBlob(){
    const blob = new Blob(recChunks, { type: 'video/webm' });
    recChunks = [];
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ask-report-${Date.now()}.webm`;
    a.click();
    URL.revokeObjectURL(url);
    onToast?.('recording saved');
  }

  return function toggleRecording(){
    if (!deps?.supported) { onToast?.('recording unsupported'); return; }
    if (mediaRec && mediaRec.state === 'recording') {
      mediaRec.stop();
      mediaRec = null;
      return;
    }
    try{
      mediaRec = new MediaRecorder(deps.stream, { mimeType: 'video/webm;codecs=vp9,opus' });
      mediaRec.ondataavailable = (e)=>{ if (e.data.size) recChunks.push(e.data); };
      mediaRec.onstop = saveBlob;
      mediaRec.start();
      onToast?.('recording… press r to stop');
    }catch(err){
      console.error(err);
      onToast?.('recording failed');
      mediaRec = null;
    }
  }
}

