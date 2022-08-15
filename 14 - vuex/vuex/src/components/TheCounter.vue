<template lang="">
  <h3>{{ finalCounter }}</h3>
</template>
<script>
  import { mapGetters } from "vuex";

  export default {
    computed: {
      //   counter() {
      //     // return this.$store.getters.finalCounter;
      //   },
      // todos los getters en un solo lugar!
      ...mapGetters("numbers", ["finalCounter"]), //namespace
    },
  };
</script>
<style lang=""></style>
