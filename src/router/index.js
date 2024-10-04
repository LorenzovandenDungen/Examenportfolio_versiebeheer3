import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TarievenView from '@/views/TarievenView.vue'
import OfferteView from '@/views/OfferteView.vue'
import ContactView from '@/views/ContactView.vue'
import WebsitesView from '@/views/WebsitesView.vue'
import PaymentView from '@/views/PaymentView.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/tarieven', name: 'tarieven', component: TarievenView },
  { path: '/offerte', name: 'offerte', component: OfferteView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/websites', name: 'websites', component: WebsitesView },
  { path: '/betalen', name: 'betalen', component: PaymentView },
  { path: '/dashboard', name: 'dashboard', component: UserDashboard },
  { path: '/login', name: 'login', component: LoginView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
