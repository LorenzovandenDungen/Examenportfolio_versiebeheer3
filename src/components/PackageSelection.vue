<template>
  <div class="package-selection">
    <h1>Kies uw Websitepakket</h1>
    <div class="packages">
      <div class="package" v-for="pkg in packages" :key="pkg.id">
        <h2>{{ pkg.name }}</h2>
        <p>{{ pkg.description }}</p>
        <p><strong>Prijs: </strong>{{ pkg.price }}</p>
        <button @click="selectPackage(pkg)">Selecteer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packages: [
        {
          id: 1,
          name: 'Starter',
          description: 'Perfect voor startende ondernemers.',
          price: '€200'
        },
        {
          id: 2,
          name: 'Business',
          description: 'Geschikt voor groeiende bedrijven.',
          price: '€500'
        },
        {
          id: 3,
          name: 'Enterprise',
          description: 'Alles wat u nodig heeft voor grote ondernemingen.',
          price: '€1000'
        }
      ]
    }
  },
  methods: {
    selectPackage(pkg) {
      // Logica voor pakketselectie hier
      alert(`Pakket ${pkg.name} geselecteerd!`)
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
