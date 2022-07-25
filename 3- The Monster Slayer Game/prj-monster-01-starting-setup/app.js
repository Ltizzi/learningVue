function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      //   playerPreviousHealth: 100,
      monsterHealth: 100,
      //   monsterPreviousHealth: 100,
    };
  },
  computed: {},
  watch: {
    // playerHealth(value) {
    //     value < this.playerPreviousHealth ? {}
    // }
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      //   this.monsterPreviousHealth = this.monsterHealth;
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      //   this.playerPreviousHealth = this.playerHealth;
      this.playerHealth -= attackValue;
    },
  },
}).mount("#game");
