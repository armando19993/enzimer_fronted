import Vue from 'vue'
import Vuex from 'vuex'
/* CUSTOMS */
import {auth} from './auth.store'
import {alert} from './alert.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    auth,
    alert
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
})
