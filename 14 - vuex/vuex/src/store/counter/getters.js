export default {
  finalCounter(state) {
    return state.counter;
  },
  // el _ se usa para decir que se necesitan dos argumentos pero solo se usa el 2do
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
};
