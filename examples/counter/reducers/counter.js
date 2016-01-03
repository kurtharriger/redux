import { INCREMENT_COUNTER, DECREMENT_COUNTER, CHANGE_FONT_COLOR, INCREMENT_ASYNC_COUNTER, INCREMENT_IF_ODD } from '../actions/counter'
import { randomizeFontColor, incrementAsync } from '../effects/counter'
import { withEffects } from 'redux/utils/withEffects'

export default function counter(state = {value: 0, color: 'black'}, action) {
  let newState = state
  switch (action.type) {
    case INCREMENT_ASYNC_COUNTER:
      return withEffects(state, [incrementAsync(action.delay)])
    case INCREMENT_IF_ODD:
      if(state.value % 2 == 1) {
        newState = {...state, value: state.value + 1}
      }
      break
    case INCREMENT_COUNTER:
      newState = {...state, value: state.value + 1}
      break
    case DECREMENT_COUNTER:
      newState = {...state, value: state.value - 1}
      break
    case CHANGE_FONT_COLOR:
      newState = {...state, color: action.color}
      break
  }
  if(state.value != newState.value && newState.value % 5 == 0) {
    return withEffects(newState, [randomizeFontColor(newState.color)] )
  }
  return newState
}
