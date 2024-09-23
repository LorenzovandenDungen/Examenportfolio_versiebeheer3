<template>
  <div class="p-4 sm:p-6">
    <!-- Een div met padding voor de mobiele en kleine schermen, zorgt voor wat ruimte rondom de inhoud -->
    <h2 class="text-2xl font-bold mb-4">Payment Information</h2>
    <!-- Titel van de betalingsinformatie sectie, met een grotere tekstgrootte en vetgedrukt -->
    <form @submit.prevent="submitPayment">
      <!-- Formulier voor betalingsgegevens. '@submit.prevent' voorkomt standaard formulieractie en roept de submitPayment methode aan -->
      <div class="mb-4">
        <!-- Een div voor de naam op de kaart invoerveld, met marges aan de onderkant -->
        <label for="name" class="block text-sm font-bold mb-2">Name on Card</label>
        <!-- Label voor het invoerveld, blokweergave om op een nieuwe regel te staan -->
        <input
          type="text"
          id="name"
          v-model="name"
          class="w-full p-2 border border-gray-300 rounded"
        />
        <!-- Invoerveld voor de naam op de kaart. 'v-model="name"' bindt de invoerwaarde aan de name variabele -->
      </div>
      <div class="mb-4">
        <!-- Een div voor het kaartnummer invoerveld, met marges aan de onderkant -->
        <label for="cardNumber" class="block text-sm font-bold mb-2">Card Number</label>
        <!-- Label voor het kaartnummer invoerveld -->
        <input
          type="text"
          id="cardNumber"
          v-model="cardNumber"
          class="w-full p-2 border border-gray-300 rounded"
        />
        <!-- Invoerveld voor het kaartnummer. 'v-model="cardNumber"' bindt de invoerwaarde aan de cardNumber variabele -->
      </div>
      <div class="flex flex-col sm:flex-row justify-between mb-4">
        <!-- Een flex container voor de vervaldatum en CVV invoervelden. Op kleinere schermen worden ze gestapeld (flex-col), op grotere schermen naast elkaar (flex-row) -->
        <div class="mb-4 sm:mb-0 sm:mr-2">
          <!-- Een div voor het vervaldatum invoerveld, met marges aan de onderkant op kleinere schermen -->
          <label for="expiry" class="block text-sm font-bold mb-2">Expiry Date</label>
          <!-- Label voor het vervaldatum invoerveld -->
          <input
            type="text"
            id="expiry"
            v-model="expiry"
            class="w-full p-2 border border-gray-300 rounded"
          />
          <!-- Invoerveld voor de vervaldatum. 'v-model="expiry"' bindt de invoerwaarde aan de expiry variabele -->
        </div>
        <div class="sm:ml-2">
          <!-- Een div voor het CVV invoerveld, met marge aan de linkerkant op grotere schermen -->
          <label for="cvv" class="block text-sm font-bold mb-2">CVV</label>
          <!-- Label voor het CVV invoerveld -->
          <input
            type="text"
            id="cvv"
            v-model="cvv"
            class="w-full p-2 border border-gray-300 rounded"
          />
          <!-- Invoerveld voor de CVV code. 'v-model="cvv"' bindt de invoerwaarde aan de cvv variabele -->
        </div>
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full sm:w-auto"
      >
        Submit Payment
      </button>
      <!-- Knop om de betaling te verzenden. Het is blauw met afgeronde hoeken en verandert van kleur bij hover -->
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaymentForm',
  // Naam van de component
  data() {
    return {
      name: '', // Variabele voor de naam op de kaart
      cardNumber: '', // Variabele voor het kaartnummer
      expiry: '', // Variabele voor de vervaldatum van de kaart
      cvv: '' // Variabele voor de CVV-code van de kaart
    }
  },
  methods: {
    submitPayment() {
      // Methode die wordt aangeroepen wanneer het formulier wordt ingediend.
      // Hier moet de betalingsverwerking plaatsvinden.
    }
  }
}
</script>

<style scoped>
/* Voeg hier eventuele aangepaste stijlen toe als dat nodig is. 
   'scoped' zorgt ervoor dat deze CSS alleen van toepassing is op dit component */
</style>
