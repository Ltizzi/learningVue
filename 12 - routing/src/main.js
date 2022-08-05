import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import App from './App.vue';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      //meta data que peude ser usada para cualquier fin, por ej needsAuth
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter } /*alias: '/'*/,
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true,
        }, //debería ir último porq lo dinámico hace que acepte cualquier valor
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log(to, from);
        next();
      },
    },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 }; //scrollea arriba
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('needs Auth!!!');
    next();
  } else {
    next();
  }
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  next();
});
//el after each solo corre una vez
router.afterEach((to, from) => {
  //puede servir para hacer analisis de datos -cambios de paginas-
  console.log('globa after each' + to, from);
});

app.use(router);

app.mount('#app');
