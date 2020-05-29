import Vue from 'vue'
import Vuex from 'vuex'

import appStore from './../domains/store-index'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
  modules: [
    'auth'
  ]
})

export default new Vuex.Store({
  modules: appStore,
  plugins: [vuexLocal.plugin]
})
