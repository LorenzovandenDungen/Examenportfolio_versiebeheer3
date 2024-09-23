<template>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <!-- Hoofdcontainer met een achtergrondverloop van donkerblauw naar paars, vult minimaal het hele scherm, met witte tekst -->
    <header class="flex flex-col sm:flex-row justify-between items-center p-6">
      <!-- Header met flexbox layout; op kleine schermen verticaal gestapeld, op middelgrote schermen horizontaal -->
      <div class="logo text-2xl font-bold">Lorenzo</div>
      <!-- Logo of merknaam, met grotere en vetgedrukte tekst -->
      <nav>
        <ul class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <!-- Navigatielijst; verticaal gestapeld op kleine schermen, horizontaal op middelgrote schermen -->
          <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
          <!-- Navigatielink naar de homepagina met een hover-effect -->
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
          <!-- Navigatielink naar de offertepagina met een kleurrijke achtergrond en hover-effect -->
        </ul>
      </nav>
    </header>
    <main class="flex flex-col items-center py-20 px-4 sm:px-8 lg:px-16">
      <!-- Hoofdinhoud van de pagina met flexbox layout, gecentreerd, met variabele padding afhankelijk van schermgrootte -->
      <section class="text-center mb-12">
        <!-- Sectie met gecentreerde tekst en marge onderaan -->
        <h1 class="text-5xl font-bold mb-4">Betalen</h1>
        <!-- Hoofdtitel met grote, vetgedrukte tekst en marge onderaan -->
        <p class="text-xl mb-8">Vul je betalingsgegevens in om door te gaan met de bestelling.</p>
        <!-- Onderkop met iets grotere tekst en marge onderaan -->
      </section>
      <section class="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-lg">
        <!-- Sectie voor het betalingsformulier met witte achtergrond, zwarte tekst, padding, afgeronde hoeken, schaduw en maximale breedte -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Betalingsformulier; '@submit.prevent' voorkomt standaard formulieractie en roept de 'handleSubmit' methode aan; 'space-y-6' voegt verticale ruimte tussen de elementen toe -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Naam op de kaart</label
            >
            <!-- Label voor het naamveld, met blokweergave en aangepaste styling -->
            <input
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <!-- Invoerveld voor de naam op de kaart, met styling en focus-effecten -->
          </div>
          <div>
            <label for="card-number" class="block text-sm font-medium text-gray-700"
              >Kaartnummer</label
            >
            <!-- Label voor het kaartnummerveld -->
            <input
              id="card-number"
              name="card-number"
              type="text"
              autocomplete="cc-number"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <!-- Invoerveld voor het kaartnummer, met styling en focus-effecten -->
          </div>
          <div class="flex flex-col sm:flex-row sm:space-x-4">
            <!-- Container voor de vervaldatum en CVC velden; verticaal gestapeld op kleine schermen, horizontaal naast elkaar op middelgrote schermen -->
            <div class="sm:flex-1">
              <label for="expiry" class="block text-sm font-medium text-gray-700"
                >Vervaldatum</label
              >
              <!-- Label voor het vervaldatumveld -->
              <input
                id="expiry"
                name="expiry"
                type="text"
                autocomplete="cc-exp"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <!-- Invoerveld voor de vervaldatum, met styling en focus-effecten -->
            </div>
            <div class="sm:flex-1">
              <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
              <!-- Label voor het CVC-veld -->
              <input
                id="cvc"
                name="cvc"
                type="text"
                autocomplete="cc-csc"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <!-- Invoerveld voor de CVC-code, met styling en focus-effecten -->
            </div>
          </div>
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600"
          >
            Betalen
          </button>
          <!-- Verzendknop met volledige breedte, kleurrijke achtergrond, afgeronde hoeken en hover-effect -->
        </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'PaymentView',
  // Naam van de Vue-component
  methods: {
    handleSubmit() {
      // Methode die wordt aangeroepen wanneer het formulier wordt ingediend
      // Hier kun je de betalingsverwerking afhandelen
    }
  }
}
</script>

<style scoped>
/* Voeg hier eventuele aangepaste stijlen toe als dat nodig is */
/* 'scoped' zorgt ervoor dat deze CSS alleen van toepassing is op dit component */
</style>
