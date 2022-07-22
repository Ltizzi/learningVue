Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
}).mount("#app");

// const input = document.querySelector("#goal");
// const btn = document.querySelector("button");
// const list = document.querySelector("ul");

// const addGoal = () => {
//   const valor = input.value;
//   const li = document.createElement("li");
//   li.innerHTML = valor;
//   list.appendChild(li);
// };

// btn.addEventListener("click", addGoal);
