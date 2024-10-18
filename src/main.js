import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/styles.css';
import { createPinia } from 'pinia';

const app = createApp(App);

// Maak een Pinia instantie aan
const pinia = createPinia();

// Voeg Pinia toe aan de Vue-applicatie
app.use(pinia);

// Voeg de router toe aan de Vue-applicatie
app.use(router);

// Mount de app
app.mount('#app');
