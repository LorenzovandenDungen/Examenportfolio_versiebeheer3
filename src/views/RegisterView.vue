<template>
    <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
      <Header /> <!-- Voeg hier de header component toe -->
      <main class="flex flex-col items-center py-20 px-4 sm:px-8 lg:px-16">
        <section class="text-center mb-12">
          <h1 class="text-4xl sm:text-5xl font-bold mb-4">Register</h1>
          <p class="text-lg sm:text-xl mb-8">
            Create your account to get started.
          </p>
        </section>
        <section class="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-lg">
          <form @submit.prevent="register" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
              <input
                type="text"
                id="name"
                v-model="name"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                v-model="email"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                v-model="password"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm Password:</label>
              <input
                type="password"
                id="password_confirmation"
                v-model="password_confirmation"
                required
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div v-if="error" class="text-red-600 text-sm">
              {{ error }}
            </div>
            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600 flex items-center justify-center"
            >
              <svg v-if="loading" class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              <span v-if="!loading">Register</span>
              <span v-else>Registering...</span>
            </button>
          </form>
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';
  import Header from '@/components/header/Header.vue'; // Zorg ervoor dat het pad klopt
  
  export default {
    name: 'RegisterView',
    components: {
      Header // Registreer de Header component
    },
    setup() {
      const name = ref('');
      const email = ref('');
      const password = ref('');
      const password_confirmation = ref('');
      const auth = useAuthStore();
      const router = useRouter();
      const loading = ref(false);
      const error = ref('');
  
      const register = async () => {
        loading.value = true;
        error.value = '';
  
        try {
          await auth.register({
            name: name.value,
            email: email.value,
            password: password.value,
            password_confirmation: password_confirmation.value,
          });
          router.push({ name: 'dashboard' });
        } catch (err) {
          error.value = err.response?.data?.message || 'An unexpected error occurred.';
          console.error(err);
        } finally {
          loading.value = false;
        }
      };
  
      return { name, email, password, password_confirmation, register, loading, error };
    }
  };
  </script>
  
  <style scoped>
  /* Geen nood om scoped stijlen toe te voegen, aangezien we dezelfde stijlen gebruiken als andere pagina's */
  /* Optioneel: Voeg extra stijlen toe voor foutmeldingen of laadindicatoren */
  </style>
  