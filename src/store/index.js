import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador: 0
  },
  mutations: {
    aumentarContador(state) {
      state.contador++
    }
  },
  actions: {
  },
  modules: {
  }
})
