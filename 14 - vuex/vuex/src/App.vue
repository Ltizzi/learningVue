<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <the-counter></the-counter>
    <Favorite-value></Favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth"> <user-auth></user-auth></base-container>
</template>

<script>
  import BaseContainer from "./components/BaseContainer.vue";
  import TheCounter from "./components/TheCounter.vue";
  import ChangeCounter from "./components/ChangeCounter.vue";
  import FavoriteValue from "./components/FavoriteValue.vue";
  import UserAuth from "./components/UserAuth.vue";
  import { mapGetters } from "vuex";

  export default {
    components: {
      BaseContainer,
      TheCounter,
      ChangeCounter,
      FavoriteValue,
      UserAuth,
    },

    methods: {
      addOne() {
        //se puede cambiar directo con this.$store.state.counter pero conviene usar mutations
        //se puede usar como metodo con dos variables, o metodo q pasa un objeto
        //this.$store.commit("increase", { value: 10 });
        //    this.$store.commit({
        //  type: "increase",
        //  value: 10,
        //});
        //dispacth llama al actions para correr async code
        this.$store.dispatch({
          type: "numbers/increase",
          value: 10,
        });
      },
    },
    computed: {
      ...mapGetters(["userIsAuthenticated"]),
    },
  };
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>
