<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

  <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- el before enter corre código antes de entrar -->
    <!-- enter es active -->
    <!-- before leave  -->
    <!-- after-enter, leave, after-leave tambien funcionan, para correr código  -->
    <!-- el método tiene "el" como parámetro que es el elemento animado -->
    <!-- :css="false" le dice a vue que no use css para la transicion-->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancel"
      @leave-cancelled="leaveCancel"
    >
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import ListData from './components/ListData.vue';
export default {
  components: { ListData },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers() {
      this.usersVisible = true;
    },
    hideUsers() {
      this.usersVisible = false;
    },
    beforeEnter(el) {
      console.log('before enter');
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      console.log(el);
      var round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
      // avisa que termino el hook, sino arranca el after enter antes
    },

    afterEnter(el) {
      console.log('after enter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('before leave');
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      console.log(el);

      var round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('after leave');
      console.log(el);
    },
    enterCancel() {
      clearInterval(this.enterInterval);
    },
    leaveCancel() {
      clearInterval(this.leaveInterval);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-50px); */
  animation: slide-fade 0.3s ease-out forwards;
}
/* se pueden personalizar las clases agregando un name="para" por ej al elemento transition del template para clases como para-enter-from para-enter-active etc */
/* Tambien en el template se puede agregar enter-to-class, enter-active-class, etc para definir custom css classes ej: <template enter-to-class="atiendo" enter-active-class="boludos" enter-from-class="vossosboludo"*/
/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

/* .v-enter-active {
  transition: all 0.3s ease-out;
  animation: slide-scale 0.3s ease-out;
} */

/* .v-enter-to {
  opacity: 1;
  transform: translateY(0);
} */
/*
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

/* .v-leave-active {
  transition: all 0.3s ease-in;
  animation: slide-scale 0.3s ease-out;
} */

/* .v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
} */

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.route-enter-active {
  animation: slide-scale 0.5s ease-out;
}

.route-leave-active {
  animation: slide-scale 0.5s ease-in;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-500px) scale(1.1);
  }

  100% {
    transform: translateX(-2000px) scale(1);
  }
}
</style>
