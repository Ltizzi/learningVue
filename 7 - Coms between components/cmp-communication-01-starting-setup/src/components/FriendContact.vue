<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === "1" ? "(Mejor Amigue)" : "" }}</h2>
    <button @click="toggleFavorite">
      <!-- {{
        friendIsFavorite == 1
          ? "Sacar de Mejores Amigues"
          : "Agregar Mejor Amigue"
      }} -->
      Mejor Amigue
    </button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
      <li>
        {{
          friendIsFavorite === "1" ? "Mejor amigue" : "Gran amigue Tita y Poppy"
        }}
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
    data() {
      return {
        detailsAreVisible: false,
        friendIsFavorite: this.isFavorite,
        friend: {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
        this.friendIsFavorite === "1"
          ? (this.friendIsFavorite = "0")
          : (this.friendIsFavorite = "1");
      },
    },
  };
</script>
