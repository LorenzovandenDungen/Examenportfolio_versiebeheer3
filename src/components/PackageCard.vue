<!-- src/components/PackageCard.vue -->
<template>
  <div class="package-card bg-white text-black p-6 rounded-lg shadow-md">
    <img :src="package.image" alt="Package Image" class="w-full h-40 object-cover mb-4" v-if="package.image"/>
    <h3 class="text-2xl font-bold mb-2">{{ package.title }}</h3>
    <p class="text-xl mb-4">{{ package.price }}</p>
    <ul class="mb-4 text-left">
      <li v-for="(feature, index) in package.features" :key="index" class="text-sm mb-2">
        • {{ feature }}
      </li>
    </ul>
    <router-link :to="package.link" class="btn-primary">Selecteer</router-link>
  </div>
</template>

<script>
export default {
  name: 'PackageCard',
  props: {
    package: {
      type: Object,
      required: true,
      validator(value) {
        return (
          'title' in value &&
          'price' in value &&
          'features' in value &&
          'link' in value
        );
      },
    },
  },
};
</script>

<style scoped>
.btn-primary {
  @apply bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition;
}
</style>
