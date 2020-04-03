import Vue from 'vue'
import Vuex from 'vuex'

import appStore from '@/domains/store-index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: appStore
})
