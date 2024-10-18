<!-- src/views/TarievenView.vue -->
<template>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <!-- Gebruik de geïmporteerde Header component -->
    <Header />

    <main class="text-center py-20 px-4 sm:px-8 lg:px-16">
      <!-- Hoofdinhoud van de pagina met gecentreerde tekst en padding die varieert per schermgrootte -->
      <section class="hero mb-12">
        <!-- Hero sectie met marge onderaan -->
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Tarieven</h1>
        <!-- Hoofdtitel met grotere tekst op kleine schermen -->
        <p class="text-lg sm:text-xl mb-8">Bekijk onze tarieven voor verschillende diensten!</p>
        <!-- Onderkop met iets grotere tekst op kleine schermen -->
      </section>
      
      <!-- Sectie met prijscards, grid layout; aantal kolommen verandert met schermgrootte -->
      <section class="price-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Gebruik het PackageCard component voor elk pakket -->
        <PackageCard
          v-for="(packageItem, index) in packages"
          :key="index"
          :package="packageItem"
          @select-package="handleSelectPackage"
        />
      </section>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'; // Zorg ervoor dat het pad klopt
import PackageCard from '@/components/PackageCard.vue'; // Importeer het PackageCard component

export default {
  name: 'TarievenView', // Naam van de Vue-component
  components: {
    Header, // Registreer de Header component
    PackageCard // Registreer de PackageCard component
  },
  data() {
    return {
      packages: [
        {
          title: 'Budget',
          price: '€595',
          features: [
            'Nieuw design',
            '1 pagina – Onepager',
            '100% jouw eigendom',
            'Domeinnaam',
            'WordPress CMS',
            'Gratis stock foto',
            'Google statistieken',
            'Aanmelding Google'
          ],
          link: '/betalen',
          image: '' // Voeg een afbeeldings-URL toe als je een afbeelding wilt weergeven
        },
        {
          title: 'Standard',
          price: '€895',
          features: [
            'Nieuw design',
            '5 pagina\'s gevuld',
            '100% jouw eigendom',
            'Domeinnaam',
            'WordPress CMS',
            'Gratis stock foto',
            'Google statistieken',
            'Aanmelding Google'
          ],
          link: '/betalen',
          image: '' // Voeg een afbeeldings-URL toe als je een afbeelding wilt weergeven
        },
        {
          title: 'Silver',
          price: '€1195',
          features: [
            'Nieuw design',
            '10 pagina\'s gevuld',
            '100% jouw eigendom',
            'Domeinnaam',
            'WordPress CMS',
            'Gratis stock foto',
            'Google statistieken',
            'Aanmelding Google'
          ],
          link: '/betalen',
          image: '' // Voeg een afbeeldings-URL toe als je een afbeelding wilt weergeven
        },
        {
          title: 'Webshop',
          price: '€1895',
          features: [
            'Nieuw design',
            'Online betalen',
            '100% jouw eigendom',
            'iDeal, Bancontact & meer',
            'WordPress CMS',
            'WooCommerce',
            'Gratis stock foto',
            'Google statistieken'
          ],
          link: '/betalen',
          image: '' // Voeg een afbeeldings-URL toe als je een afbeelding wilt weergeven
        }
      ]
    }
  },
  methods: {
    handleSelectPackage(selectedPackage) {
      console.log('Geselecteerd pakket:', selectedPackage);
      // Voeg hier logica toe voor wat er moet gebeuren bij het selecteren van een pakket
      // Bijvoorbeeld: router push naar het betaalpagina met de geselecteerde pakket
      this.$router.push({ path: selectedPackage.link, query: { packageName: selectedPackage.title } });
    }
  }
}
</script>

<style scoped>
/* Voeg hier eventuele aangepaste stijlen toe indien nodig */
</style>
