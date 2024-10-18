import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TarievenView from '@/views/TarievenView.vue'
import OfferteView from '@/views/OfferteView.vue'
import ContactView from '@/views/ContactView.vue'
import WebsitesView from '@/views/WebsitesView.vue'
import PaymentView from '@/views/PaymentView.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue' // Optioneel
import NotFound from '@/views/NotFound.vue' // Zorg ervoor dat deze bestaat
import { useAuthStore } from '@/stores/auth'
import { getActivePinia } from 'pinia'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/tarieven', name: 'tarieven', component: TarievenView },
  { path: '/offerte', name: 'offerte', component: OfferteView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/websites', name: 'websites', component: WebsitesView },
  { path: '/betalen', name: 'betalen', component: PaymentView },
  
  // Beschermde route met meta property
  { 
    path: '/dashboard', 
    name: 'dashboard', 
    component: UserDashboard,
    meta: { requiresAuth: true }
  },
  
  { path: '/login', name: 'login', component: LoginView },
  { path: '/register', name: 'register', component: RegisterView }, // Optioneel
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Router Guard voor Authenticatie
router.beforeEach((to, from, next) => {
  const pinia = getActivePinia()
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.token) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
