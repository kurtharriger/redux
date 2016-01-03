export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const INCREMENT_ASYNC_COUNTER = 'INCREMENT_ASYNC_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const CHANGE_FONT_COLOR = 'CHANGE_FONT_COLOR'
export const INCREMENT_IF_ODD  = 'INCREMENT_IF_ODD'

export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}

export function changeFontColor(color) {
  return {
    type: CHANGE_FONT_COLOR,
    color: color
  }
}
/*
// NOTE: not recommended
// getState requires component to know where it is located in the state
// it is thus context dependent and limits reuse
export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()
    const { value } = counter

    if (value % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}
*/
export function incrementIfOdd() {
  return {
    type: INCREMENT_IF_ODD
  }
}

/*
// NOTE: not recommened
// actions should be pure and return only simple data
// this allows parent component to wrap message with additional context
// when multiple instances exist
export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}
*/

export function incrementAsync(delay = 1000) {
  return {
    type: INCREMENT_ASYNC_COUNTER,
    delay: delay
  }
}
