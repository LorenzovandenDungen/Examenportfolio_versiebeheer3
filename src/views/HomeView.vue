<template>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <header class="flex flex-col md:flex-row justify-between items-center p-6">
      <div class="logo text-2xl font-bold mb-4 md:mb-0">Lorenzo</div>
      <nav>
        <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
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
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Website laten maken?</h1>
        <p class="text-lg sm:text-xl mb-8">Dat kan!</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <router-link to="/contact" class="bg-gray-700 py-2 px-6 rounded hover:bg-gray-600">Contact</router-link>
          <router-link to="/offerte" class="bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-6 rounded hover:from-purple-600 hover:to-blue-600">Vraag offerte aan</router-link>
        </div>
      </section>
      <section class="mt-20">
        <div class="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-64 h-64 mx-auto flex items-center justify-center p-6 overflow-hidden">
          <div class="text-center">
            <h2 class="text-xl font-bold">About me</h2>
            <p class="text-sm">Mijn naam is Lorenzo</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style>
/* Add any custom styles here if needed */
</style>
