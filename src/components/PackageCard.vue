<template>
  <div class="package-card bg-white text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <h3 class="text-2xl font-bold mb-2 text-center">{{ package.title }}</h3>
    <p class="text-3xl font-semibold mb-4 text-center text-orange-500">{{ package.price }}</p>
    <ul class="mb-4 text-left">
      <li v-for="(feature, index) in package.features" :key="index" class="text-sm mb-2">
        • {{ feature }}
      </li>
    </ul>
    <router-link :to="package.link" class="btn-primary w-full text-center py-2 mt-4 block rounded">
      Nu aanvragen!
    </router-link>
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
  @apply bg-gradient-to-r from-blue-500 to-purple-500 text-white transition duration-300 hover:shadow-lg;
}
</style>
