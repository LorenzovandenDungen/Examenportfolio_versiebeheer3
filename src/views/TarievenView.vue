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
      <section class="hero mb-12">
        <h1 class="text-5xl font-bold mb-4">Tarieven</h1>
        <p class="text-xl mb-8">Bekijk onze tarieven voor verschillende diensten!</p>
      </section>
      <section class="price-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        <div class="bg-white text-black p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">Budget</h2>
          <p class="text-4xl font-bold text-orange-500 mb-4">€595</p>
          <ul class="text-left mb-4">
            <li class="mb-2">Nieuw design</li>
            <li class="mb-2">1 pagina – Onepager</li>
            <li class="mb-2">100% jouw eigendom</li>
            <li class="mb-2">Domeinnaam</li>
            <li class="mb-2">WordPress CMS</li>
            <li class="mb-2">Gratis stock foto's</li>
            <li class="mb-2">Google statistieken</li>
            <li class="mb-2">Aanmelding Google</li>
          </ul>
          <button class="bg-orange-500 text-white py-2 px-4 rounded">Nu aanvragen!</button>
        </div>
        <div class="bg-white text-black p-6 rounded-lg shadow-md">
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
          <button class="bg-orange-500 text-white py-2 px-4 rounded">Nu aanvragen!</button>
        </div>
        <div class="bg-white text-black p-6 rounded-lg shadow-md">
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
          <button class="bg-orange-500 text-white py-2 px-4 rounded">Nu aanvragen!</button>
        </div>
        <div class="bg-white text-black p-6 rounded-lg shadow-md">
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
          <button class="bg-orange-500 text-white py-2 px-4 rounded">Nu aanvragen!</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'TarievenView',
}
</script>

<style>
/* Add any custom styles here if needed */
</style>
