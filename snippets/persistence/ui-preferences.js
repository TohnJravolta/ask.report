// Persist and restore lightweight UI prefs in localStorage
const KEY = 'askreport_ui';

export function loadPrefs(){
  try{ return JSON.parse(localStorage.getItem(KEY) || '{}') } catch { return {}; }
}

export function savePrefs(p){
  try{ localStorage.setItem(KEY, JSON.stringify(p)); } catch {}
}

export function applyPrefs({ prefs, state, apply }){
  if('mode' in prefs){ state.mode = prefs.mode|0; }
  if('speedFactor' in prefs){ state.speedFactor = Math.max(-3, Math.min(3, Number(prefs.speedFactor)||1)); }
  if(prefs.lab){
    state.lab.locked = !!prefs.lab.locked;
    state.lab.novelty = !!prefs.lab.novelty;
    if(state.lab.locked){
      if(typeof prefs.lab.f === 'number') state.lab.f = Math.max(0.020, Math.min(0.080, prefs.lab.f));
      if(typeof prefs.lab.k === 'number') state.lab.k = Math.max(0.040, Math.min(0.070, prefs.lab.k));
    }
  }
  apply?.(state);
}

export function bindPrefsSync({ state, onChange }){
  function sync(){
    const payload = { mode: state.mode, speedFactor: state.speedFactor, lab: { locked: !!state.lab.locked, novelty: !!state.lab.novelty } };
    if(state.lab.locked){ payload.lab.f = state.lab.f; payload.lab.k = state.lab.k; }
    savePrefs(payload);
    onChange?.(payload);
  }
  return sync;
}

