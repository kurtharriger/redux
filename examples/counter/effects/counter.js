import _ from 'lodash'
import { changeFontColor } from '../actions/counter'

export const RANDOMIZE_FONT_COLOR = 'CHANGE_FONT_COLOR'

export function randomizeFontColor(color) {
  return {
    type: RANDOMIZE_FONT_COLOR,
    exclude: color
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
      default:
        console.log('do not know what to do with effect: ', effect)
        break
    }
  })
}
