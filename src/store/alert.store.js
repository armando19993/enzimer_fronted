export const alert = {
  namespaced: true,
  state: {active: false, color: "", message: ""},
  actions: {
    snackBar({ commit }, message) {
      commit("set_snackbar", {
        active: true,
        color: "teal", // You can create another actions for diferent color.
        message: message
      });
    }
  },
  mutations: {
    set_snackbar(state, snackbar) {
      state.snackbar = snackbar;
    }
  }
};