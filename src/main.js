import './assets/main.css'

// Import Bootstrap CSS and optionally JS
import 'bootstrap/dist/css/bootstrap.min.css'
// If you plan to use Bootstrap's JavaScript components (like modals or dropdowns), uncomment the next line
// import 'bootstrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
