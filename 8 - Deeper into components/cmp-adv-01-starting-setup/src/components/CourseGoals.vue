<template lang="">
  <ul>
    <li v-for="goal in goals" :key="goal">
      <!-- componente hijo que manda a través del slot data al padre -->
      <slot :item="goal" another="asdasd"></slot>
    </li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        goals: ["Finish the course", "Learn Vue"],
      };
    },
  };
</script>
<style lang=""></style>
