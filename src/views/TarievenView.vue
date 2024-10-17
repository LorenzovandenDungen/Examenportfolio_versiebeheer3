<template>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <!-- Gebruik de geïmporteerde Header component -->
    <Header /> <!-- Voeg hier de header component toe -->

    <main class="text-center py-20 px-4 sm:px-8 lg:px-16">
      <!-- Hoofdinhoud van de pagina met gecentreerde tekst en padding die varieert per schermgrootte -->
      <section class="hero mb-12">
        <!-- Hero sectie met marge onderaan -->
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Tarieven</h1>
        <!-- Hoofdtitel met grotere tekst op kleine schermen -->
        <p class="text-lg sm:text-xl mb-8">Bekijk onze tarieven voor verschillende diensten!</p>
        <!-- Onderkop met iets grotere tekst op kleine schermen -->
      </section>
      <section class="price-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Sectie met prijscards, grid layout; aantal kolommen verandert met schermgrootte -->
        <div class="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-xl font-bold mb-4">Budget</h2>
          <p class="text-4xl font-bold text-orange-500 mb-4">€595</p>
          <ul class="text-left mb-4">
            <li class="mb-2">Nieuw design</li>
            <li class="mb-2">1 pagina – Onepager</li>
            <li class="mb-2">100% jouw eigendom</li>
            <li class="mb-2">Domeinnaam</li>
            <li class="mb-2">WordPress CMS</li>
            <li class="mb-2">Gratis stock foto's</li>
            <li class="mb-2">Google statistieken</li>
            <li class="mb-2">Aanmelding Google</li>
          </ul>
          <router-link to="/betalen" class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-4 rounded hover:bg-blue-800">Nu aanvragen!</router-link>
        </div>
        <div class="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-xl font-bold mb-4">Standard</h2>
          <p class="text-4xl font-bold text-orange-500 mb-4">€895</p>
          <ul class="text-left mb-4">
            <li class="mb-2">Nieuw design</li>
            <li class="mb-2">5 pagina's gevuld</li>
            <li class="mb-2">100% jouw eigendom</li>
            <li class="mb-2">Domeinnaam</li>
            <li class="mb-2">WordPress CMS</li>
            <li class="mb-2">Gratis stock foto's</li>
            <li class="mb-2">Google statistieken</li>
            <li class="mb-2">Aanmelding Google</li>
          </ul>
          <router-link to="/betalen" class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-4 rounded hover:bg-blue-800">Nu aanvragen!</router-link>
        </div>
        <div class="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-xl font-bold mb-4">Silver</h2>
          <p class="text-4xl font-bold text-orange-500 mb-4">€1195</p>
          <ul class="text-left mb-4">
            <li class="mb-2">Nieuw design</li>
            <li class="mb-2">10 pagina's gevuld</li>
            <li class="mb-2">100% jouw eigendom</li>
            <li class="mb-2">Domeinnaam</li>
            <li class="mb-2">WordPress CMS</li>
            <li class="mb-2">Gratis stock foto's</li>
            <li class="mb-2">Google statistieken</li>
            <li class="mb-2">Aanmelding Google</li>
          </ul>
          <router-link to="/betalen" class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-4 rounded hover:bg-blue-800">Nu aanvragen!</router-link>
        </div>
        <div class="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-xl font-bold mb-4">Webshop</h2>
          <p class="text-4xl font-bold text-orange-500 mb-4">€1895</p>
          <ul class="text-left mb-4">
            <li class="mb-2">Nieuw design</li>
            <li class="mb-2">Online betalen</li>
            <li class="mb-2">100% jouw eigendom</li>
            <li class="mb-2">iDeal, Bancontact & meer</li>
            <li class="mb-2">WordPress CMS</li>
            <li class="mb-2">WooCommerce</li>
            <li class="mb-2">Gratis stock foto's</li>
            <li class="mb-2">Google statistieken</li>
          </ul>
          <router-link to="/betalen" class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-4 rounded hover:bg-blue-800">Nu aanvragen!</router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'; // Zorg ervoor dat het pad klopt

export default {
  name: 'TarievenView', // Naam van de Vue-component
  components: {
    Header // Registreer de Header component
  }
}
</script>

<style scoped>
/* Voeg hier eventuele aangepaste stijlen toe als dat nodig is */
/* 'scoped' zorgt ervoor dat deze CSS alleen van toepassing is op dit component */
</style>
