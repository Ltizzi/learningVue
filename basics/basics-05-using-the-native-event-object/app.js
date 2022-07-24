const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      //fullname: "",
      lastname: "",
    };
  },
  watch: {
    counter(value) {
      value > 50 ? (this.counter = 0) : console.log("menor que 50");
    },
    // name(value) {
    //   this.fullname = value + " " + this.lastname;
    // },
    // lastname(value) {
    //   this.fullname = this.name + " " + value;
    // },
  },
  computed: {
    fullname() {
      return this.name === "" || this.lastname === ""
        ? ""
        : this.name + " " + this.lastname;
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    setLastname(event) {
      this.lastname = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
      this.fullname = "";
    },
  },
});

app.mount("#events");
