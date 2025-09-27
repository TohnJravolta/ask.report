// Simple focus trap for a modal dialog
export function trapFocus(modal){
  const focusable = modal.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
  if(!focusable.length) return ()=>{};
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  function onKeydown(e){
    if(e.key !== 'Tab') return;
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }

  modal.addEventListener('keydown', onKeydown);
  return ()=> modal.removeEventListener('keydown', onKeydown);
}

