function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: "",
      battleLog: [],
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 != 0;
    },
    // endGame() {
    //   return this.playerHealth == 0 || this.monsterHealth == 0;
    // },
  },
  watch: {
    playerHealth(value) {
      // return value == 0 ? false : true;
      if (value == 0 && this.monsterHealth == 0) {
        this.winner = "draw";
      } else if (value == 0) this.winner = "monster";
    },
    monsterHealth(value) {
      // return value == 0 ? false : true;
      if (value == 0 && this.playerHealth == 0) {
        this.winner = "draw";
      } else if (value == 0) this.winner = "player";
    },
  },
  methods: {
    newGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = "";
      this.currentRound = 0;
      this.battleLog = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      attackValue <= this.monsterHealth
        ? (this.monsterHealth -= attackValue)
        : (this.monsterHealth = 0);
      // this.battleLog.push(
      //   "El jugador ataca  con " + attackValue + " puntos de daño!"
      // );
      this.addLogMessage("jugador", "ataca", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      attackValue <= this.playerHealth
        ? (this.playerHealth -= attackValue)
        : (this.playerHealth = 0);
      // this.battleLog.push(
      //   "El monstruo ataca  con " + attackValue + " puntos de daño!"
      // );
      this.addLogMessage("monstruo", "ataca", attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      attackValue <= this.monsterHealth
        ? (this.monsterHealth -= attackValue)
        : (this.monsterHealth = 0);
      // this.battleLog.push(
      //   "El jugador ataca  con " + attackValue + " puntos de daño!"
      // );
      this.addLogMessage("jugador", "ataca", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healthValue = getRandomValue(8, 20);
      const healthMissing = 100 - this.playerHealth;
      healthValue <= healthMissing
        ? (this.playerHealth += healthValue)
        : (this.playerHealth = 100);
      // this.battleLog.push(
      //   "El jugador se cura " + healthValue + " puntos de vida!"
      // );
      this.addLogMessage("jugador", "cura", healthValue);
      this.attackPlayer();
    },
    addLogMessage(who, what, value) {
      this.battleLog.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
    surrender() {
      this.winner = "monster";
    },
  },
}).mount("#game");
