const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 5,
      username: "",
      confirmedName: "",
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
    submitForm() {
      alert("Submited!!!");
    },
    confirmName() {
      this.confirmedName = this.username;
    },
    resetInput() {
      this.confirmedName = "";
    },
  },
});

app.mount("#events");
