export default {
  //async code

  login(context) {
    context.commit("setAuth", { isAuth: true });
  },
  logout(context) {
    context.commit("setAuth", { isAuth: false });
  },
};
