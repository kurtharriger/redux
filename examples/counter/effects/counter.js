import _ from 'lodash'
import { changeFontColor, increment } from '../actions/counter'

export const RANDOMIZE_FONT_COLOR = 'CHANGE_FONT_COLOR'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'

export function randomizeFontColor(color) {
  return {
    type: RANDOMIZE_FONT_COLOR,
    exclude: color
  }
}

export function incrementAsync(delay) {
  return {
    type: INCREMENT_ASYNC,
    delay: delay
  }
}

export function runEffects(effects, dispatch) {
  const colors = ["red", "green", "blue", "yellow", "purple", "black", "orange"]
  effects.forEach((effect) => {
    switch(effect.type) {
      case RANDOMIZE_FONT_COLOR:
        let choices = _.filter(colors, (color) => color !== effect.exclude)
        let newcolor = _.sample(choices)
        dispatch(changeFontColor(newcolor))
        break
      case INCREMENT_ASYNC:
        setTimeout(() => dispatch(increment()), effect.delay)
        break
      default:
        console.log('do not know what to do with effect: ', effect)
        break
    }
  })
}
