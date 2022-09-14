import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // Current state of the application lies here.
  state: { },

  // Compute derived state based on the current state. More like computed property.
  getters: { },

  // Mutate the current state
  mutations: { },

  // Get data from server and send that to mutations to mutate the current state
  actions: { }
})

export default store