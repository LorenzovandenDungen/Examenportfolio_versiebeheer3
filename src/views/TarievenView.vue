<template>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <!-- Hoofdcontainer met een achtergrondverloop van blauw naar paars, vult minimaal het hele scherm, met witte tekst -->
    <header class="flex flex-col md:flex-row justify-between items-center p-6">
      <!-- Header met flexbox layout; op kleine schermen verticaal gestapeld, op middelgrote schermen horizontaal -->
      <div class="logo text-2xl font-bold mb-4 md:mb-0">Lorenzo</div>
      <!-- Logo of merknaam, grote en vetgedrukte tekst, marge onderaan op mobiel, geen marge op middelgrote schermen -->
      <nav>
        <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <!-- Navigatielijst; verticaal op mobiel, horizontaal op middelgrote schermen, met tussenruimte tussen items -->
          <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
          <!-- Navigatielink naar de homepagina -->
          <li><router-link to="/websites" class="hover:text-gray-300">Websites</router-link></li>
          <!-- Navigatielink naar de websites pagina -->
          <li><router-link to="/tarieven" class="hover:text-gray-300">Tarieven</router-link></li>
          <!-- Navigatielink naar de tarieven pagina -->
          <li><router-link to="/contact" class="hover:text-gray-300">Contact</router-link></li>
          <!-- Navigatielink naar de contactpagina -->
          <li>
            <router-link
              to="/offerte"
              class="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600"
            >
              Offerte
            </router-link>
          </li>
          <!-- Navigatielink naar de offertepagina met een kleurrijke achtergrond en afgeronde hoeken -->
        </ul>
      </nav>
    </header>
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
        <div
          class="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Prijscard met witte achtergrond, zwarte tekst, padding, afgeronde hoeken en schaduweffect bij hover -->
          <h2 class="text-xl font-bold mb-4">Budget</h2>
          <!-- Naam van het pakket -->
          <p class="text-4xl font-bold text-orange-500 mb-4">€595</p>
          <!-- Prijs, groot lettertype, oranje kleur -->
          <ul class="text-left mb-4">
            <!-- Lijst met kenmerken van het pakket, uitgelijnd naar links -->
            <li class="mb-2">Nieuw design</li>
            <li class="mb-2">1 pagina – Onepager</li>
            <li class="mb-2">100% jouw eigendom</li>
            <li class="mb-2">Domeinnaam</li>
            <li class="mb-2">WordPress CMS</li>
            <li class="mb-2">Gratis stock foto's</li>
            <li class="mb-2">Google statistieken</li>
            <li class="mb-2">Aanmelding Google</li>
          </ul>
          <router-link
            to="/betalen"
            class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-4 rounded hover:bg-blue-800"
            >Nu aanvragen!</router-link
          >
          <!-- Knop om het pakket aan te vragen, met een kleurverloop en hover-effect -->
        </div>
        <!-- Herhaling van de prijscard structuur voor andere pakketten -->
        <div
          class="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
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
          <router-link
            to="/betalen"
            class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-4 rounded hover:bg-blue-800"
            >Nu aanvragen!</router-link
          >
        </div>
        <div
          class="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
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
          <router-link
            to="/betalen"
            class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-4 rounded hover:bg-blue-800"
            >Nu aanvragen!</router-link
          >
        </div>
        <div
          class="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
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
          <router-link
            to="/betalen"
            class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-4 rounded hover:bg-blue-800"
            >Nu aanvragen!</router-link
          >
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'TarievenView'
  // Naam van de Vue-component
}
</script>

<style scoped>
/* Voeg hier eventuele aangepaste stijlen toe als dat nodig is */
/* 'scoped' zorgt ervoor dat deze CSS alleen van toepassing is op dit component */
</style>
