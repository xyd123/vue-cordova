import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  isHideMask: true,
  isHideStorehouse: true,
  isHideSence: true,
  isHideReclaim: true,
  isHideCenter: true,
  isHideProp: true,
  isCollect: false,
  isBasket: false,
  isChemical: false,
  isPickaxe: false,
  isActive: -1
}

const store = new Vuex.Store({
  state,
  mutations
})

if (module.hot) {
  module.hot.accept(['./mutations'], () => {
    const mutations = require('./mutations').default
    store.hotUpdate({
      mutations
    })
  })
}

export default store
