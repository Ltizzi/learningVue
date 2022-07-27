<template>
  <div>
    <the-header></the-header>
    <!-- or <TheHeader /> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- OLD WAY WITH v-if -->
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <!-- New Way -KEEP ALIVE no mata los components-->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
      <!-- slot usado para generar contenido dinamicamente, el componente hijo tiene el v-for, pero el padre tiene el template -->
      <!-- <template> EL TEMPLATE VA SI SON MAS DE UN SLOT -ADEMAS DEL DEFAULT- </template> -->
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.another }}</p>
    </course-goals>
  </div>
</template>

<script>
  //local components
  import TheHeader from "./components/TheHeader.vue";
  import UserInfo from "./components/UserInfo.vue";
  import BadgeList from "./components/BadgeList.vue";
  import CourseGoals from "./components/CourseGoals.vue";
  import ActiveGoals from "./components/ActiveGoals.vue";
  import ManageGoals from "./components/ManageGoals.vue";

  export default {
    components: {
      TheHeader,
      UserInfo,
      BadgeList,
      CourseGoals,
      ActiveGoals,
      ManageGoals,
    },
    data() {
      return {
        selectedComponent: "active-goals",
        activeUser: {
          name: "Maximilian Schwarzmüller",
          description: "Site owner and admin",
          role: "admin",
        },
      };
    },
    methods: {
      setSelectedComponent(cmp) {
        this.selectedComponent = cmp;
      },
    },
  };
</script>

<style>
  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>
