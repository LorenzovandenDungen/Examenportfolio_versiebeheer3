<template>
  <!-- Hoofdcontainer met een achtergrond gradient van blauw naar paars, die de volledige hoogte van het scherm bedekt en witte tekst toont -->
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <!-- Header: flex container die de logo en de navigatie links bevat -->
    <header class="flex flex-col md:flex-row justify-between items-center p-6">
      <!-- Logo sectie -->
      <div class="logo text-2xl font-bold mb-4 md:mb-0">Lorenzo</div>

      <!-- Navigatie: een lijst met router-links voor de verschillende pagina's -->
      <nav>
        <!-- Responsive flex lijst voor de navigatie items, met ruimte tussen de links -->
        <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <!-- Link naar Home -->
          <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
          <!-- Link naar Websites -->
          <li><router-link to="/websites" class="hover:text-gray-300">Websites</router-link></li>
          <!-- Link naar Tarieven -->
          <li><router-link to="/tarieven" class="hover:text-gray-300">Tarieven</router-link></li>
          <!-- Link naar Contact -->
          <li><router-link to="/contact" class="hover:text-gray-300">Contact</router-link></li>
          <!-- Call-to-action Link naar Offerte, met speciale styling voor opvallende knoppen -->
          <li>
            <router-link
              to="/offerte"
              class="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600"
              >Offerte</router-link
            >
          </li>
        </ul>
      </nav>
    </header>

    <!-- Hoofd content van de pagina -->
    <main class="text-center py-20 px-4 sm:px-8 lg:px-16">
      <!-- Hero sectie: Een prominente header met een call-to-action voor het laten maken van websites -->
      <section class="hero mb-12">
        <!-- Hoofd titel -->
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Website laten maken?</h1>
        <!-- Subtekst -->
        <p class="text-lg sm:text-xl mb-8">Dat kan!</p>

        <!-- Knoppen voor Contact en Offerte aanvraag -->
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <!-- Link naar de Contact pagina -->
          <router-link to="/contact" class="bg-gray-700 py-2 px-6 rounded hover:bg-gray-600"
            >Contact</router-link
          >
          <!-- Link naar de Offerte aanvraag pagina, met een opvallende gradient knop -->
          <router-link
            to="/offerte"
            class="bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-6 rounded hover:from-purple-600 hover:to-blue-600"
            >Vraag offerte aan</router-link
          >
        </div>
      </section>

      <!-- About me sectie: een cirkelvormige container met wat informatie over de eigenaar van de site -->
      <section class="mt-20">
        <!-- Een gradient cirkel die tekst bevat -->
        <div
          class="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-64 h-64 mx-auto flex items-center justify-center p-6 overflow-hidden"
        >
          <!-- Inhoud binnenin de cirkel -->
          <div class="text-center">
            <!-- Titel 'About me' -->
            <h2 class="text-xl font-bold">About me</h2>
            <!-- Korte beschrijving -->
            <p class="text-sm">Mijn naam is Lorenzo</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView' // Naam van het component, hier 'HomeView'
}
</script>

<style>
/* Voeg hier eventueel aangepaste stijlen toe */
</style>
