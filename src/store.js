import Vuex from 'vuex'

export default new Vuex.Store({
  mutations:{
    changeMobileSidebarStatus(state){
      state.isMobileSidebarOpen=!state.isMobileSidebarOpen
    }
  },
  state: {
    isMobileSidebarOpen:false
  },
  getters:{
    mobileSidebarStatus(state){
      return state.isMobileSidebarOpen
    }
  }
})