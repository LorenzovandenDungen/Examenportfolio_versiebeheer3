<template>
  <div class="progress">
      <h3>Voortgang</h3>
      <ul>
          <li v-for="item in progress" :key="item.id">
              {{ item.status }} - {{ item.created_at }}
          </li>
      </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import api from '../api/axios';

export default {
  setup() {
      const progress = ref([]);

      const fetchProgress = async () => {
          try {
              const response = await api.get('/progress-statuses');
              progress.value = response.data;
          } catch (error) {
              console.error(error);
          }
      };

      onMounted(() => {
          fetchProgress();
      });

      return { progress };
  },
};
</script>
