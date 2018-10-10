import Vue from 'vue';
import App from './App.vue';
import 'vue-awesome/icons';
import Icon from './vue-awesome/components/Icon';

new Vue({
  el: '#app',
  render: h => h(App)
});

Vue.component('v-icon', Icon)