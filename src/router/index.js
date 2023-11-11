import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../Views/SignUp.vue';
import WelcomePage from '../Views/WelcomePage.vue';
import LogIn from '../Views/LogIn.vue';
import MainPage from '../Views/MainPage.vue';

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignUp },
  { path: '/login', component: LogIn },
  { path: '/main', component: MainPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
