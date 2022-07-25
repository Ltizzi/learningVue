const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Perez",
          phone: "4241730",
          email: "manu@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "42437973",
          email: "juliej@localhost.com",
        },
      ],
    };
  },
  computed: {},
  methods: {},
});

app.component("friend-contact", {
  template: `
  <li>
  <h2>{{ friend.name }}</h2>
  <button @click="toggleDetails">
    {{ detailsAreVisible ? "Hide" : "Show" }}
  </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{ friend.phone }}</li>
    <li><strong>E-mail:</strong> {{ friend.email }}</li>
  </ul>
</li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Perez",
        phone: "4241730",
        email: "manu@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
