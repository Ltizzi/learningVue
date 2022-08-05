<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // do something
      this.$router.push('/');
      //this.$router.forward(); //adelante del navegador, back() va pa atras
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next();
  },
  //usado para advertir al usuario q se va de la web sin grabar los cambios
  beforeRouteLeave(to, from, next) {
    console.log('before leave' + to, from);
    if (this.changesSaved === true) {
      next();
    } else {
      const userWantsToLeave = confirm('Are u sure? no grabaste nada pete');
      next(userWantsToLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
