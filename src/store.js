import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {
      name: 'Khairul Fahmi Bin Mohd Yusof',
      courseYear: '3/SECJH',
      matrixNo: 'A21MJ5011',
      address: 'Residensi UTMKL, Kuala Lumpur, Malaysia'
    }
  },
  mutations: {
    updateProfile(state, profile) {
      state.profile = profile
    }
  },
  actions: {
    updateProfile({ commit }, profile) {
      commit('updateProfile', profile)
    }
  },
  getters: {
    profile: state => state.profile
  }
})