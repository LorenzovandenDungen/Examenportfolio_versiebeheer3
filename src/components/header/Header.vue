<template>
    <header class="flex flex-col md:flex-row justify-between items-center p-6">
      <div class="logo text-2xl font-bold mb-4 md:mb-0">Lorenzo</div>

      <nav>
        <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
          <li><router-link to="/websites" class="hover:text-gray-300">Websites</router-link></li>
          <li><router-link to="/tarieven" class="hover:text-gray-300">Tarieven</router-link></li>
          <li><router-link to="/contact" class="hover:text-gray-300">Contact</router-link></li>
          <li><router-link to="login" class="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600">Login</router-link></li>
          
          <li>
            <router-link
              to="/offerte"
              class="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600"
            >
              Offerte
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  /* Voeg hier specifieke stijlen voor de header toe indien nodig */
  </style>
  