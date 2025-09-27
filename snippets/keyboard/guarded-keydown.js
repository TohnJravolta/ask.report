// Guard helpers: avoid capturing keys when user is interacting with UI
export function eventFromUI(target){
  return !!(target && (target.closest && (target.closest('.overlay') || target.closest('.panel') || target.closest('.modal'))));
}

export function isUIEvent(e){
  const t = e && (e.target || null);
  if (eventFromUI(t)) return true;
  const tag = (t && t.tagName || '').toLowerCase();
  return (t && t.isContentEditable) || ['input','textarea','select','button','a'].includes(tag);
}

// Example usage
export function bindKeyboardShortcuts(ctx){
  const { speedEl, modeBtn, showHelp, hideHelp, actions } = ctx;
  document.addEventListener('keydown', (e)=>{
    if (isUIEvent(e)) return;
    if (e.key==='h'){ showHelp(); e.preventDefault(); return; }
    if (e.key==='m'){ if(modeBtn) modeBtn.click(); else actions.toggleMode(); return; }
    if (e.key==='s'){ actions.reseed(); return; }
    if (e.key==='d'){ actions.showSeed(); return; }
    if (e.key==='c'){ actions.copyShare(); return; }
    if (e.key==='b'){ actions.saveBookmark?.(); return; }
    if (e.key==='l'){ actions.openLibrary?.(); return; }
    if (e.key===']'){ speedEl?.stepUp(); speedEl?.dispatchEvent(new Event('input')); return; }
    if (e.key==='['){ speedEl?.stepDown(); speedEl?.dispatchEvent(new Event('input')); return; }
    if (e.code==='Space'){ e.preventDefault(); actions.togglePause(); return; }
    if (e.key==='p'){ actions.snapshot(); return; }
    if (e.key==='a'){ actions.startAudio(); return; }
  });
}

