<template>
  <div class="container-fluid">
    <header>

    </header>

    <div class="main-banner text-white text-center">
      <h1 class="banner-title">Website laten maken?</h1>
      <button class="btn btn-light" @click="navigateTo('/contact')">Contact</button>
    </div>

    <div class="row content-section">
      <div v-for="block in blocks" :key="block.title" class="col-md-4 mb-4">
        <div class="image-block mb-3" :style="{ backgroundImage: 'url(' + block.imageUrl + ')' }"></div>
        <h2 class="block-title">{{ block.title }}</h2>
        <p class="block-description">{{ block.description }}</p>
        <button class="btn btn-secondary" @click="navigateTo(block.route)">{{ block.buttonText }}</button>
      </div>
    </div>

    <footer class="footer bg-dark text-white text-center py-3">
      &copy; 2024 Your Company Name. All Rights Reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      blocks: [
        {
          title: 'Title 1',
          description: 'Description 1',
          route: '/route1',
          buttonText: 'Button',
          imageUrl: 'path-to-your-image'
        },
        {
          title: 'Title 2',
          description: 'Description 2',
          route: '/route2',
          buttonText: 'Button',
          imageUrl: 'path-to-your-image'
        },
        {
          title: 'Title 3',
          description: 'Description 3',
          route: '/route3',
          buttonText: 'Button',
          imageUrl: 'path-to-your-image'
        }
        // Add more blocks as needed
      ]
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style>
@import '../assets/styles.css';

</style>
