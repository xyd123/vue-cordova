import { HIDESTOREHOUSE, HIDESENCE, HIDERECLAIM, HIDECENTER, HIDEPROP, CHANGEMENU } from './mutation-types'

export const hideStorehouse = ({ dispatch }) => dispatch(HIDESTOREHOUSE)
export const hideSence = ({ dispatch }) => dispatch(HIDESENCE)
export const hideReclaim = ({ dispatch }) => dispatch(HIDERECLAIM)
export const hideCenter = ({ dispatch }) => dispatch(HIDECENTER)
export const hideProp = ({ dispatch }) => dispatch(HIDEPROP)
export const changeMenu = ({ dispatch }, item, index) => {
  dispatch(CHANGEMENU, item, index)
}
