import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import App from './App.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList /*alias: '/'*/,
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true,
        }, //debería ir último porq lo dinámico hace que acepte cualquier valor
      ],
    },
    { path: '/users', component: UsersList },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
  linkActiveClass: 'active',
});

app.use(router);

app.mount('#app');
