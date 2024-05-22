<template>
  <div class="bg-white text-black p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center">
    <img :src="image" alt="Package Image" class="w-32 h-32 sm:w-48 sm:h-48 object-cover mb-4">
    <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
    <p class="mb-4">{{ description }}</p>
    <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Select Package</button>
  </div>
</template>

<script>
export default {
  name: 'PackageCard',
  props: {
    image: String,
    title: String,
    description: String
  }
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
