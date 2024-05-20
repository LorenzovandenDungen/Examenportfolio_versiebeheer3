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
    <main class="text-center py-20">
      <section class="hero">
        <h1 class="text-5xl font-bold mb-4">Betaling</h1>
        <p class="text-xl mb-8">Vul het onderstaande formulier in om te betalen</p>
        <form class="max-w-md mx-auto">
          <div class="mb-4">
            <label class="block text-left">Naam</label>
            <input type="text" class="w-full p-2 rounded text-black"/>
          </div>
          <div class="mb-4">
            <label class="block text-left">Creditcardnummer</label>
            <input type="text" class="w-full p-2 rounded text-black"/>
          </div>
          <div class="mb-4">
            <label class="block text-left">Vervaldatum</label>
            <input type="text" class="w-full p-2 rounded text-black"/>
          </div>
          <div class="mb-4">
            <label class="block text-left">CVV</label>
            <input type="text" class="w-full p-2 rounded text-black"/>
          </div>
          <button type="submit" class="bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600">Betalen</button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'PaymentView',
}
</script>

<style>
/* Custom styles if needed */
</style>
