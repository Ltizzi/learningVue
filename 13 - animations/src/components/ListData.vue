<template lang="">
  <!-- VARIOS ITEMS JEJEJEJ tag="ul" hace q transition-group sea un elemento en el dom -->
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>

  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: ['pepe', 'papu', 'angela', 'michael_scott'],
    };
  },
  methods: {
    addUser() {
      const enteredUser = this.$refs.userNameInput.value;
      this.users.unshift(enteredUser);
      this.$refs.userNameInput.value = '';
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
}

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
.user-list-enter-active {
  transition: all 0.5s ease-in-out;
}
.user-list-leave-active {
  transition: all 0.5s ease-in-out;
  position: absolute;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-move {
  transition: transform 0.8s ease;
}
</style>
