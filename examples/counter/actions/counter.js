export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const CHANGE_FONT_COLOR = 'CHANGE_FONT_COLOR'

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

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}
