import counterMutations from "./mutations.js";
import counterActions from "./actions.js";
import counterGetters from "./getters.js";

export default {
  namespaced: true, //separa el modulo del resto del store
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
