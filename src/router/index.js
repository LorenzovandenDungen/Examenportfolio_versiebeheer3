import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import TarievenView from '@/views/TarievenView.vue';
import OfferteView from '@/views/OfferteView.vue';
import ContactView from '@/views/ContactView.vue';
import WebsitesView from '@/views/WebsitesView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/tarieven', name: 'tarieven', component: TarievenView },
  { path: '/offerte', name: 'offerte', component: OfferteView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/websites', name: 'websites', component: WebsitesView }
  // Voeg hier andere routes toe indien nodig
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
