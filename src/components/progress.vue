<template>
    <div class="progress">
      <h2>Project Voortgang</h2>
      <ul>
        <li v-for="item in progress" :key="item.id">
          {{ item.task }}: {{ item.status }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Progress',
    data() {
      return {
        progress: [],
      };
    },
    created() {
      this.fetchProgress();
    },
    methods: {
      async fetchProgress() {
        try {
          const response = await fetch('/api/progress');
          const data = await response.json();
          this.progress = data;
        } catch (error) {
          console.error('Error fetching progress:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .progress {
    margin: 20px;
  }
  </style>
  