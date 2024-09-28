<template>
  <!-- Hoofdcontainer met een achtergrondverloop en minimale hoogte van het scherm -->
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <!-- Header met logo en navigatie -->
    <header class="flex flex-col sm:flex-row justify-between items-center p-6">
      <!-- Logo -->
      <div class="logo text-2xl font-bold">Lorenzo</div>
      <!-- Navigatie -->
      <nav>
        <ul class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <!-- Navigatielink naar Home -->
          <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
          <!-- Navigatielink naar Websites -->
          <li><router-link to="/websites" class="hover:text-gray-300">Websites</router-link></li>
          <!-- Navigatielink naar Tarieven -->
          <li><router-link to="/tarieven" class="hover:text-gray-300">Tarieven</router-link></li>
          <!-- Navigatielink naar Contact -->
          <li><router-link to="/contact" class="hover:text-gray-300">Contact</router-link></li>
          <!-- Navigatielink naar Offerte -->
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
    <!-- Hoofdinhoud met een sectie voor de betalingsinformatie -->
    <main class="flex flex-col items-center py-20 px-4 sm:px-8 lg:px-16">
      <!-- Sectie met titel en beschrijving -->
      <section class="text-center mb-12">
        <h1 class="text-5xl font-bold mb-4">Betalen</h1>
        <p class="text-xl mb-8">Vul je betalingsgegevens in om door te gaan met de bestelling.</p>
      </section>
      <!-- Formuliersectie met een witte achtergrond en schaduw -->
      <section class="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-lg">
        <!-- Formulier voor betalingsgegevens -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Betaalmethode selectievak -->
          <div>
            <label for="payment-method" class="block text-sm font-medium text-gray-700"
              >Betaalmethode</label
            >
            <select
              v-model="paymentMethod"
              id="payment-method"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="card">Creditcard</option>
              <option value="ideal">iDEAL</option>
            </select>
          </div>
          <!-- Creditcardgegevens invoervelden -->
          <div v-if="paymentMethod === 'card'">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Naam op de kaart</label
              >
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="card-number" class="block text-sm font-medium text-gray-700"
                >Kaartnummer</label
              >
              <input
                id="card-number"
                name="card-number"
                type="text"
                autocomplete="cc-number"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div class="flex flex-col sm:flex-row sm:space-x-4">
              <div class="sm:flex-1">
                <label for="expiry" class="block text-sm font-medium text-gray-700"
                  >Vervaldatum</label
                >
                <input
                  id="expiry"
                  name="expiry"
                  type="text"
                  autocomplete="cc-exp"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div class="sm:flex-1">
                <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
                <input
                  id="cvc"
                  name="cvc"
                  type="text"
                  autocomplete="cc-csc"
                  required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <!-- iDEAL bank selectievak -->
          <div v-if="paymentMethod === 'ideal'">
            <div>
              <label for="ideal-bank" class="block text-sm font-medium text-gray-700"
                >Kies je bank</label
              >
              <select
                id="ideal-bank"
                v-model="idealBank"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="abn_amro">ABN AMRO</option>
                <option value="asn_bank">ASN Bank</option>
                <option value="bunq">Bunq</option>
                <option value="handelsbanken">Handelsbanken</option>
                <option value="ing">ING</option>
                <option value="knab">Knab</option>
                <option value="rabobank">Rabobank</option>
                <option value="regiobank">RegioBank</option>
                <option value="sns_bank">SNS Bank</option>
                <option value="triodos_bank">Triodos Bank</option>
                <option value="van_lanschot">Van Lanschot</option>
              </select>
            </div>
          </div>
          <!-- Betaalknop -->
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600"
          >
            Betalen
          </button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js'

export default {
  name: 'PaymentView',
  data() {
    return {
      stripe: null, // Stripe object voor het verwerken van betalingen
      paymentMethod: 'card', // Standaard betaalmethode is creditcard
      cardNumber: '', // Creditcardnummer
      expiryDate: '', // Vervaldatum van de creditcard
      cvc: '', // CVC-code van de creditcard
      idealBank: '' // Geselecteerde bank voor iDEAL betalingen
    }
  },
  async mounted() {
    // Laad de Stripe object met de public key
    this.stripe = await loadStripe('your-publishable-key')
  },
  methods: {
    async handleSubmit() {
      // Verwerk de betaling op basis van de geselecteerde betaalmethode
      if (this.paymentMethod === 'card') {
        // Verwerk creditcardbetaling
        const { token, error } = await this.stripe.createToken({
          number: this.cardNumber,
          exp_month: this.expiryDate.split('/')[0],
          exp_year: this.expiryDate.split('/')[1],
          cvc: this.cvc
        })

        if (error) {
          console.error(error)
        } else {
          this.processPayment(token)
        }
      } else if (this.paymentMethod === 'ideal') {
        // Verwerk iDEAL betaling
        const { source, error } = await this.stripe.createSource({
          type: 'ideal',
          amount: 1099, // Bedrag in centen
          currency: 'eur',
          owner: {
            name: 'Jenny Rosen'
          },
          redirect: {
            return_url: 'https://your-website.com/return'
          },
          ideal: {
            bank: this.idealBank
          }
        })

        if (error) {
          console.error(error)
        } else {
          window.location.href = source.redirect.url
        }
      }
    },
    async processPayment(token) {
      try {
        // Verstuur de betalingstoken naar de backend voor verwerking
        const response = await fetch('/api/process-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ token })
        })

        const result = await response.json()
        if (result.success) {
          alert('Betaling succesvol!')
        } else {
          alert('Betaling mislukt!')
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped>
/* Voeg hier eventuele aangepaste stijlen toe als dat nodig is */
/* 'scoped' zorgt ervoor dat deze CSS alleen van toepassing is op dit component */
</style>
