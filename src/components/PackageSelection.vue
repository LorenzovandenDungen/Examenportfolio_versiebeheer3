<template>
  <div class="package-selection">
    <h1>Kies uw Websitepakket</h1>
    <div class="packages">
      <div class="package" v-for="pkg in packages" :key="pkg.id">
        <h2>{{ pkg.name }}</h2>
        <p>{{ pkg.description }}</p>
        <p><strong>Prijs: </strong>{{ pkg.price }}</p>
        <button @click="toggleSelection(pkg)">{{ isSelected(pkg) ? 'Deselecteer' : 'Selecteer' }}</button>
      </div>
    </div>
    <button v-if="selectedPackages.length > 1" @click="comparePackages">Vergelijk</button>
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
.package-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.packages {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.package {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  width: 30%;
  text-align: center;
}
</style>
