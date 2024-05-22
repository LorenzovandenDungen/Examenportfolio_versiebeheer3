<template>
  <div class="package-selection p-4 sm:p-6">
    <h1 class="text-2xl font-bold mb-6">Kies uw Websitepakket</h1>
    <div class="packages flex flex-col sm:flex-row flex-wrap justify-center">
      <div class="package border border-gray-300 p-4 m-2 rounded w-full sm:w-1/3 text-center" v-for="pkg in packages" :key="pkg.id">
        <h2 class="text-xl font-bold mb-2">{{ pkg.name }}</h2>
        <p class="mb-2">{{ pkg.description }}</p>
        <p class="font-bold mb-4">Prijs: {{ pkg.price }}</p>
        <button @click="toggleSelection(pkg)" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
          {{ isSelected(pkg) ? 'Deselecteer' : 'Selecteer' }}
        </button>
      </div>
    </div>
    <button v-if="selectedPackages.length > 1" @click="comparePackages" class="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Vergelijk</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packages: [
        { id: 1, name: 'Starter', description: 'Perfect voor startende ondernemers.', price: '€200' },
        { id: 2, name: 'Business', description: 'Geschikt voor groeiende bedrijven.', price: '€500' },
        { id: 3, name: 'Enterprise', description: 'Alles wat u nodig heeft voor grote ondernemingen.', price: '€1000' }
      ],
      selectedPackages: []
    }
  },
  methods: {
    toggleSelection(pkg) {
      const index = this.selectedPackages.findIndex(p => p.id === pkg.id);
      if (index === -1) {
        this.selectedPackages.push(pkg);
      } else {
        this.selectedPackages.splice(index, 1);
      }
    },
    isSelected(pkg) {
      return this.selectedPackages.some(p => p.id === pkg.id);
    },
    comparePackages() {
      // Logic to display a comparison modal or navigate to a comparison view
      alert('Navigeer naar vergelijkingspagina of toon modal');
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
