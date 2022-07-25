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
      detailsVisible: false,
    };
  },
  computed: {},
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount("#app");
