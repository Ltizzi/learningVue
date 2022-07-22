const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 5,
      username: "",
    };
  },
  methods: {
    add(num) {
      this.counter += num; //counter++
    },
    remove(num) {
      this.counter -= num; //counter--
    },
    changeUsername(event) {
      console.log(event);
      this.username = event.target.value;
    },
  },
});

app.mount("#events");
