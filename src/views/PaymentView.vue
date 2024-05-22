<template>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <header class="flex justify-between items-center p-6">
      <div class="logo text-2xl font-bold">Lorenzo</div>
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
          <li><router-link to="/websites" class="hover:text-gray-300">Websites</router-link></li>
          <li><router-link to="/tarieven" class="hover:text-gray-300">Tarieven</router-link></li>
          <li><router-link to="/contact" class="hover:text-gray-300">Contact</router-link></li>
          <li><router-link to="/offerte" class="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600">Offerte</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="flex flex-col items-center py-20 px-4 sm:px-8 lg:px-16">
      <section class="text-center mb-12">
        <h1 class="text-5xl font-bold mb-4">Betalen</h1>
        <p class="text-xl mb-8">Vul je betalingsgegevens in om door te gaan met de bestelling.</p>
      </section>
      <section class="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-lg">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Naam op de kaart</label>
            <input id="name" name="name" type="text" autocomplete="name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div>
            <label for="card-number" class="block text-sm font-medium text-gray-700">Kaartnummer</label>
            <input id="card-number" name="card-number" type="text" autocomplete="cc-number" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div class="flex flex-col sm:flex-row sm:space-x-4">
            <div class="sm:flex-1">
              <label for="expiry" class="block text-sm font-medium text-gray-700">Vervaldatum</label>
              <input id="expiry" name="expiry" type="text" autocomplete="cc-exp" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div class="sm:flex-1">
              <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
              <input id="cvc" name="cvc" type="text" autocomplete="cc-csc" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
          </div>
          <button type="submit" class="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600">Betalen</button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'PaymentView',
  methods: {
    handleSubmit() {
      // Handle the form submission
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
