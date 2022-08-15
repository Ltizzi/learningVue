export default {
  increment(state) {
    state.counter++;
  },
  increase(state, payload) {
    console.log(state);
    //el payload puede ser cualquier tipo de dato, objeto, variable, array, etc
    state.counter = state.counter + payload.value;
  },
};
