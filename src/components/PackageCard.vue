<template>
  <div class="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <!-- Titel van het pakket -->
    <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
    
    <!-- Prijs van het pakket -->
    <p class="text-4xl font-bold text-orange-500 mb-4">{{ price }}</p>
    
    <!-- Lijst met functies -->
    <ul class="text-left mb-4">
      <li v-for="(feature, index) in features" :key="index" class="mb-2">{{ feature }}</li>
    </ul>
    
    <!-- Link om het pakket aan te vragen -->
    <router-link :to="link" class="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-2 px-4 rounded hover:bg-blue-800">
      Nu aanvragen!
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PackageCard',
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    features: {
      type: Array,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Voeg hier eventuele aangepaste stijlen toe indien nodig */
</style>
