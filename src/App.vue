<template>
  <div id="app">
    <GlobalHeader />
    <router-view />
    <!-- Removed the footer from here to avoid duplication with HomeView.vue -->
  </div>
</template>

<script>
// Import your GlobalHeader component
import GlobalHeader from "./components/GlobalHeader.vue";

export default {
  name: 'App',
  components: {
    GlobalHeader
  }
}
</script>

<!-- Keep your style for .footer if you have other pages that will use it -->
<style>
/* Global styles */
</style>
