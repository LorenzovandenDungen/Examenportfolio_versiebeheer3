<template>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <!-- Gebruik de geïmporteerde Header component -->
    <Header /> <!-- Voeg hier de header component toe -->

    <main class="flex flex-col items-center py-20 px-4 sm:px-8 lg:px-16">
      <section class="text-center mb-12">
        <h1 class="text-5xl font-bold mb-4">Betalen</h1>
        <p class="text-xl mb-8">Vul je betalingsgegevens in om door te gaan met de bestelling.</p>
      </section>

      <section class="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-lg">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="payment-method" class="block text-sm font-medium text-gray-700">Betaalmethode</label>
            <select
              v-model="paymentMethod"
              id="payment-method"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="card">Creditcard</option>
              <option value="ideal">iDEAL</option>
            </select>
          </div>

          <div v-if="paymentMethod === 'card'">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Naam op de kaart</label>
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
              <label for="card-element" class="block text-sm font-medium text-gray-700">Kaartnummer</label>
              <div
                id="card-element"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              ></div>
            </div>
          </div>

          <div v-if="paymentMethod === 'ideal'">
            <div>
              <label for="ideal-bank" class="block text-sm font-medium text-gray-700">Kies je bank</label>
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
import Header from '@/components/header/Header.vue'; // Zorg ervoor dat het pad klopt

export default {
  name: 'PaymentView',
  components: {
    Header // Registreer de Header component
  },
  data() {
    return {
      stripe: null,
      elements: null,
      cardElement: null,
      paymentMethod: 'card',
      idealBank: '',
      clientSecret: ''
    }
  },
  async mounted() {
    this.stripe = await loadStripe('pk_test_51Q3zaHFalZJgi3VaOveAi4eS9WTFYYHOty6hRAu7KBRfjSBkMP38wN6ZtMvTffKjpMqe1ZzvEECYVZjlXb8WcOAQ00VpZ6mta3')
    this.elements = this.stripe.elements()
    this.cardElement = this.elements.create('card')
    this.cardElement.mount('#card-element')
    await this.fetchClientSecret()
  },
  methods: {
    async fetchClientSecret() {
      const response = await fetch('http://localhost:8000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()
      if (data.clientSecret) {
        this.clientSecret = data.clientSecret
      } else {
        console.error('Geen clientSecret ontvangen van de server')
      }
    },
    async handleSubmit() {
      if (this.paymentMethod === 'card') {
        const { paymentIntent, error } = await this.stripe.confirmCardPayment(this.clientSecret, {
          payment_method: {
            card: this.cardElement,
            billing_details: {
              name: document.getElementById('name').value
            }
          }
        })

        if (error) {
          console.error(error)
          alert('Er is een fout opgetreden bij het verwerken van de betaling.')
        } else if (paymentIntent.status === 'succeeded') {
          alert('Betaling succesvol!')
        }
      } else if (this.paymentMethod === 'ideal') {
        const { paymentIntent, error } = await this.stripe.confirmIdealPayment(this.clientSecret, {
          payment_method: {
            ideal: {
              bank: this.idealBank
            },
            billing_details: {
              name: 'iDEAL User'
            }
          },
          return_url: 'https://your-website.com/return'
        })

        if (error) {
          console.error(error)
          alert('Er is een fout opgetreden bij het verwerken van de betaling.')
        } else if (paymentIntent.status === 'requires_action') {
          window.location.href = paymentIntent.next_action.redirect_to_url.url
        }
      }
    }
  }
}
</script>

<style scoped>
/* Voeg hier eventuele aangepaste stijlen toe als dat nodig is */
</style>
