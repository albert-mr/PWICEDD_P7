import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../Views/SignUp.vue';
import WelcomePage from '../Views/WelcomePage.vue';
import LogIn from '../Views/LogIn.vue';
import SearchRanking from '../Views/SearchRanking.vue';
import MainPage from '../Components/NavBar.vue';
import GameFinder from '../Views/GameFinder.vue';
import StoreCreate from '../Views/StoreCreate.vue';
import StoreSell from '../Views/StoreSell.vue';

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignUp },
  { path: '/login', component: LogIn },
  { path: '/main', component: MainPage },
  { path: '/search-ranking', component: SearchRanking },
  { path: '/search-game', component: GameFinder },
  { path: '/store-create', component: StoreCreate },
  { path: '/store-sell', component: StoreSell },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
