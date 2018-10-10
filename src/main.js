import Vue from 'vue';
import App from './App.vue';
import Header from './Header.vue';
import Team from './Team.vue';
import 'vue-awesome/icons';
import Icon from './vue-awesome/components/Icon';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#nav',
  
  render: h => h(App)
});

new Vue({
  el: '#header',
  render: h => h(Header)
});

new Vue({
  el: '#team',
  router,
  render: h => h(Team)
});

Vue.component('v-icon', Icon)