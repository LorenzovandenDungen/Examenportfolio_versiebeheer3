<template>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <!-- Gebruik de geïmporteerde Header component -->
    <Header /> <!-- Voeg hier de header component toe -->

    <main class="text-center py-20">
      <section class="hero">
        <h1 class="text-5xl font-bold mb-4">Dashboard</h1>
        <p class="text-xl mb-8">Beheer uw account en instellingen!</p>
        <div class="flex justify-center space-x-4">
          <router-link to="/contact" class="bg-gray-700 py-2 px-6 rounded hover:bg-gray-600">Contact</router-link>
          <router-link to="/offerte" class="bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-6 rounded hover:from-purple-600 hover:to-blue-600">Vraag offerte aan</router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'; // Zorg ervoor dat het pad klopt

export default {
  name: 'UserDashboard',
  components: {
    Header // Registreer de Header component
  }
}
</script>

<style>
/* Voeg hier eventuele aangepaste stijlen toe als dat nodig is */
</style>
