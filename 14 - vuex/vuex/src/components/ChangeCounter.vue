<template lang="">
  <button @click="inc">Add 1</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>
<script>
  import { mapActions } from "vuex";

  export default {
    methods: {
      //   addOne() {
      //     this.$store.dispatch("increment");
      //   },
      //mapea los metodos de mutations en un solo lugar
      //   ...mapActions(["increment", "increase"]),
      //otra forma de mapear
      ...mapActions("numbers", {
        inc: "increment",
        increase: "increase",
      }),
    },
  };
</script>
<style lang=""></style>
