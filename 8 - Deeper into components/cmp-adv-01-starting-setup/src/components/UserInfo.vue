<template>
  <section>
    <base-card>
      <!-- # es v.slot: -->
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
  export default {
    props: ["fullName", "infoText", "role"],
  };
</script>

<style scoped>
  /* scoped estilo solo en este componente */
</style>
