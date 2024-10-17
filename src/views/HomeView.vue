<template>
  <!-- Hoofdcontainer met een achtergrond gradient van blauw naar paars, die de volledige hoogte van het scherm bedekt en witte tekst toont -->
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <!-- Header: gebruik de geïmporteerde Header component -->
    <Header /> <!-- Voeg hier de header component toe -->

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
          <router-link to="/contact" class="bg-gray-700 py-2 px-6 rounded hover:bg-gray-600">Contact</router-link>
          <!-- Link naar de Offerte aanvraag pagina, met een opvallende gradient knop -->
          <router-link to="/offerte" class="bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-6 rounded hover:from-purple-600 hover:to-blue-600">Vraag offerte aan</router-link>
        </div>
      </section>

      <!-- About me sectie: een cirkelvormige container met wat informatie over de eigenaar van de site -->
      <section class="mt-20">
        <!-- Een gradient cirkel die tekst bevat -->
        <div class="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-64 h-64 mx-auto flex items-center justify-center p-6 overflow-hidden">
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
import Header from '@/components/header/Header.vue'; // Zorg ervoor dat het pad klopt

export default {
  name: 'HomeView', // Naam van het component, hier 'HomeView'
  components: {
    Header // Registreer de Header component
  }
}
</script>

<style>
/* Voeg hier eventueel aangepaste stijlen toe */
</style>
