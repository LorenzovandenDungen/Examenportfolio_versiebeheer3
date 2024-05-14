<template>
    <div class="card mb-4">
      <div class="card-body">
        <h3 class="card-title">{{ pkg.name }}</h3>
        <p class="card-text">{{ pkg.description }}</p>
        <p class="card-text"><strong>Kosten:</strong> {{ pkg.price }} EUR</p>
        <button v-if="!isComparison" class="btn btn-secondary" @click="$emit('compare', pkg)">Vergelijk</button>
        <button v-if="isComparison" class="btn btn-danger" @click="$emit('remove', pkg)">Verwijder</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pkg: Object,
      isComparison: {
        type: Boolean,
        default: false
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }
  </style>
  