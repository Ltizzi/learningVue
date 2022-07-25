function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
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
    endGame() {
      return this.playerHealth == 0 || this.monsterHealth == 0;
    },
  },
  watch: {
    playerHealth(value) {
      return value == 0 ? false : true;
    },
    monsterHealth(value) {
      return value == 0 ? false : true;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      attackValue <= this.monsterHealth
        ? (this.monsterHealth -= attackValue)
        : (this.monsterHealth = 0);
      this.battleLog.push(
        "El jugador ataca  con " + attackValue + " puntos de daño!"
      );
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      attackValue <= this.playerHealth
        ? (this.playerHealth -= attackValue)
        : (this.playerHealth = 0);
      this.battleLog.push(
        "El monstruo ataca  con " + attackValue + " puntos de daño!"
      );
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      attackValue <= this.monsterHealth
        ? (this.monsterHealth -= attackValue)
        : (this.monsterHealth = 0);
      this.battleLog.push(
        "El jugador ataca  con " + attackValue + " puntos de daño!"
      );
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healthValue = getRandomValue(8, 20);
      const healthMissing = 100 - this.playerHealth;
      healthValue <= healthMissing
        ? (this.playerHealth += healthValue)
        : (this.playerHealth = 100);
      this.battleLog.push(
        "El jugador se cura " + healthValue + " puntos de vida!"
      );
      this.attackPlayer();
    },
  },
}).mount("#game");
