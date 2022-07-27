<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Mejor Amigue)" : "" }}</h2>
    <button @click="toggleFavorite">Mejor Amigue</button>
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
        {{ isFavorite ? "Mejor amigue" : "Gran amigue de Tita y Poppy" }}
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
    props: {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      emailAddress: {
        type: String,
        required: true,
      },
      isFavorite: {
        type: Boolean,
        required: false,
        default: false,
        // validacion:
        // validator: function (value) {
        //   return value === "1" || value === "0";
        // },
      },
    },
    // emits: ["toggle-favorite"],
    emits: {
      "toggle-favorite": function (id) {
        if (id) {
          return true;
        } else {
          console.log("Id is missing");
          return false;
        }
      },
    },
    data() {
      return {
        detailsAreVisible: false,
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
        this.$emit("toggle-favorite", this.id);
        // this.friendIsFavorite = !this.friendIsFavorite;
      },
    },
  };
</script>
