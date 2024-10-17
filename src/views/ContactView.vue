<template>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <!-- Gebruik de geïmporteerde Header component -->
    <Header /> <!-- Voeg hier de header component toe -->

    <main class="flex flex-col items-center py-20 px-4 sm:px-8 lg:px-16">
      <!-- Hoofdinhoud van de pagina met flexbox layout, gecentreerd, met variabele padding afhankelijk van schermgrootte -->
      <section class="text-center mb-12">
        <!-- Sectie met gecentreerde tekst en marge onderaan -->
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Contact</h1>
        <!-- Hoofdtitel met grote, vetgedrukte tekst; tekstgrootte neemt toe op kleine schermen -->
        <p class="text-lg sm:text-xl mb-8">Neem contact met ons op voor meer informatie.</p>
        <!-- Onderkop met middelgrote tekst; tekstgrootte neemt toe op kleine schermen -->
      </section>
      <section class="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-lg">
        <!-- Sectie voor het contactformulier met witte achtergrond, zwarte tekst, padding, afgeronde hoeken, schaduw, en maximale breedte -->
        <form class="space-y-6">
          <!-- Contactformulier met verticale ruimte tussen de elementen -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Naam</label>
            <!-- Label voor het naamveld -->
            <input
              id="name"
              name="name"
              type="text"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <!-- Invoerveld voor de naam van de gebruiker met styling en focus-effecten -->
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">E-mail</label>
            <!-- Label voor het e-mailveld -->
            <input
              id="email"
              name="email"
              type="email"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <!-- Invoerveld voor het e-mailadres van de gebruiker met styling en focus-effecten -->
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Bericht</label>
            <!-- Label voor het berichtveld -->
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
            <!-- Tekstvak voor het bericht van de gebruiker met styling en focus-effecten -->
          </div>
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600"
          >
            Verstuur
          </button>
          <!-- Verzendknop met volledige breedte, kleurrijke achtergrond, padding, afgeronde hoeken en hover-effect -->
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'; // Zorg ervoor dat het pad klopt

export default {
  name: 'ContactView', // Naam van de Vue-component
  components: {
    Header // Registreer de Header component
  }
}
</script>

<style scoped>
/* Voeg hier eventuele aangepaste stijlen toe als dat nodig is */
/* 'scoped' zorgt ervoor dat deze CSS alleen van toepassing is op dit component */
</style>
