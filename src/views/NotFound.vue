<template>
    <div class="not-found">
      <h1>404 - Pagina Niet Gevonden</h1>
      <p>Sorry, de pagina die je zoekt bestaat niet.</p>
      <router-link to="/">Ga terug naar Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  }
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  