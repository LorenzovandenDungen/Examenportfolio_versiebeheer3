<template>
  <div class="vertical-container">
    <section class="main-content">
      <h1>Werkwijze</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <!-- Updated button styling and position -->
      <div class="button-container">
        <button @click="goToContact">Contact</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goToContact() {
      // Logic to navigate to the contact page
    }
  }
}
</script>

<style scoped>
@import '../assets/styles.css';
</style>
