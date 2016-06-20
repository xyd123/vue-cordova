import {
  HIDESTOREHOUSE,
  HIDESENCE,
  HIDERECLAIM,
  HIDECENTER,
  HIDEPROP,
  CHANGEMENU
}
from './mutation-types'

export
default {
  [HIDESTOREHOUSE] (state) {
    state.isHideStorehouse = !state.isHideStorehouse
    state.isHideMask = !state.isHideMask
  },
  [HIDESENCE] (state) {
    state.isHideSence = !state.isHideSence
    state.isHideMask = !state.isHideMask
  },
  [HIDERECLAIM] (state) {
    state.isHideReclaim = !state.isHideReclaim
    state.isHideMask = !state.isHideMask
  },
  [HIDECENTER] (state) {
    state.isHideCenter = !state.isHideCenter
    state.isHideMask = !state.isHideMask
  },
  [HIDEPROP] (state) {
    state.isHideProp = !state.isHideProp
    state.isHideMask = !state.isHideMask
  },
  [CHANGEMENU] (state, item, index) {
    if (index === state.isActive) {
      state.isActive = -1
      state.isBasket = false
      state.isChemical = false
      state.isPickaxe = false
      state.isCollect = false
      return
    } else {
      state.isActive = index
      if (item.type === 'collect') {
        state.isBasket = false
        state.isChemical = false
        state.isPickaxe = false
        state.isCollect = true
      }
      if (item.type === 'basket') {
        state.isCollect = false
        state.isChemical = false
        state.isPickaxe = false
        state.isBasket = true
      }
      if (item.type === 'chemical') {
        state.isCollect = false
        state.isBasket = false
        state.isPickaxe = false
        state.isChemical = true
      }
      if (item.type === 'pickaxe') {
        state.isCollect = false
        state.isBasket = false
        state.isChemical = false
        state.isPickaxe = true
      }
    }
  }
}
