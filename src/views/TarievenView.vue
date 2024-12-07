<!-- src/views/TarievenView.vue -->
<template>
  <!-- Hoofdcontainer met een gradiënt achtergrond, minimale hoogte van het scherm en flexbox layout -->
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <!-- Header component wordt hier gebruikt -->
    <Header /> <!-- Voeg hier de Header component toe -->

    <!-- Main inhoud van de pagina, gecentreerd en met padding die varieert per schermgrootte -->
    <main class="text-center py-20 px-4 sm:px-8 lg:px-16">
      <!-- Hero sectie met marge onderaan -->
      <section class="hero mb-12">
        <!-- Hoofdtitel met grotere tekst op kleine schermen -->
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Tarieven</h1>
        <!-- Onderkop met iets grotere tekst op kleine schermen -->
        <p class="text-lg sm:text-xl mb-8">Bekijk onze tarieven voor verschillende diensten!</p>
      </section>

      <!-- Sectie met prijscards, grid layout; aantal kolommen verandert met schermgrootte -->
      <section class="price-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Prijscard voor 'Budget' pakket -->
        <div class="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <!-- Titel van het pakket -->
          <h2 class="text-xl font-bold mb-4">Budget</h2>
          <!-- Prijs van het pakket -->
          <p class="text-4xl font-bold text-orange-500 mb-4">€595</p>
          <!-- Lijst met inbegrepen diensten -->
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
          <!-- Link naar de betaalpagina -->
          <router-link to="/betalen" class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-4 rounded hover:bg-blue-800">Nu aanvragen!</router-link>
        </div>

        <!-- Prijscard voor 'Standard' pakket -->
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

        <!-- Prijscard voor 'Silver' pakket -->
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

        <!-- Prijscard voor 'Webshop' pakket -->
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
// Importeer de Header component van het opgegeven pad
import Header from '@/components/header/Header.vue';

export default {
  name: 'TarievenView', // Naam van de Vue-component
  components: {
    Header // Registreer de Header component binnen deze component
  }
}
</script>

<style scoped>
/* Scoped stijlen die alleen van toepassing zijn op dit component */
/* Geen extra stijlen toegevoegd omdat Tailwind CSS-klassen al de styling regelen */
</style>
