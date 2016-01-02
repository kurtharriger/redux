
export function hasEffects(newState) {
  return newState && newState.__redux_withEffects;
}
export function getState(newState) {
  if(hasEffects(newState))
    return newState.state
  return newState
}
export function getEffects(newState) {
  if(hasEffects(newState)) return newState.effects
  return []
}
export function withEffects(state, effects) {
  return {__redux_withEffects: true, state, effects}
}
