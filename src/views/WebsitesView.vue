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
    <main class="text-center py-20 px-4 sm:px-8 lg:px-16">
      <section class="hero mb-12">
        <h1 class="text-5xl font-bold mb-4">Website Pakketten</h1>
        <p class="text-xl mb-8">Blader door onze verschillende websitepakketten en vergelijk ze om de juiste keuze te maken.</p>
      </section>
      <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(packageItem, index) in packages" :key="index" class="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-xl font-bold mb-4">{{ packageItem.name }}</h2>
          <p class="text-4xl font-bold text-orange-500 mb-4">{{ packageItem.price }}</p>
          <ul class="text-left mb-4">
            <li v-for="(feature, fIndex) in packageItem.features" :key="fIndex" class="mb-2">{{ feature }}</li>
          </ul>
          <router-link to="/betalen" class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-4 rounded hover:bg-blue-800">Nu aanvragen!</router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'WebsitesView',
  data() {
    return {
      packages: [
        {
          name: 'Budget',
          price: '€595',
          features: [
            'Nieuw design',
            '1 pagina – Onepager',
            '100% jouw eigendom',
            'Domeinnaam',
            'WordPress CMS',
            'Gratis stock foto\'s',
            'Google statistieken',
            'Aanmelding Google',
          ],
        },
        {
          name: 'Standard',
          price: '€895',
          features: [
            'Nieuw design',
            '5 pagina\'s gevuld',
            '100% jouw eigendom',
            'Domeinnaam',
            'WordPress CMS',
            'Gratis stock foto\'s',
            'Google statistieken',
            'Aanmelding Google',
          ],
        },
        {
          name: 'Silver',
          price: '€1195',
          features: [
            'Nieuw design',
            '10 pagina\'s gevuld',
            '100% jouw eigendom',
            'Domeinnaam',
            'WordPress CMS',
            'Gratis stock foto\'s',
            'Google statistieken',
            'Aanmelding Google',
          ],
        },
        {
          name: 'Webshop',
          price: '€1895',
          features: [
            'Nieuw design',
            'Online betalen',
            '100% jouw eigendom',
            'iDeal, Bancontact & meer',
            'WordPress CMS',
            'WooCommerce',
            'Gratis stock foto\'s',
            'Google statistieken',
          ],
        },
      ],
    };
  },
}
</script>

<style>
/* Add any custom styles here if needed */
</style>
