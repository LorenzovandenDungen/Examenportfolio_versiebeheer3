<template>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <Header /> <!-- Voeg hier de header component toe -->
    <main class="flex flex-col items-center py-20 px-4 sm:px-8 lg:px-16">
      <section class="text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Login</h1>
        <p class="text-lg sm:text-xl mb-8">
          Welcome back! Please enter your credentials to log in.
        </p>
      </section>
      <section class="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-lg">
        <form @submit.prevent="login" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              :class="{'border-red-500': errors.email}"
              aria-describedby="email-error"
            />
            <p v-if="errors.email" id="email-error" class="mt-1 text-sm text-red-600">
              {{ errors.email }}
            </p>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              :class="{'border-red-500': errors.password}"
              aria-describedby="password-error"
            />
            <p v-if="errors.password" id="password-error" class="mt-1 text-sm text-red-600">
              {{ errors.password }}
            </p>
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
            <span v-if="!loading">Login</span>
            <span v-else>Logging in...</span>
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
  name: 'LoginView',
  components: {
    Header // Registreer de Header component
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const auth = useAuthStore();
    const router = useRouter();
    const loading = ref(false);
    const error = ref('');
    const errors = ref({});

    const login = async () => {
      loading.value = true;
      error.value = '';
      errors.value = {};

      try {
        await auth.login({ email: email.value, password: password.value });
        router.push('/dashboard');
      } catch (err) {
        if (err.response && err.response.data) {
          // Laravel Validation Errors
          if (err.response.status === 422) {
            errors.value = err.response.data.errors;
          } else {
            error.value = err.response.data.message || 'An unexpected error occurred.';
          }
        } else {
          error.value = 'Unable to connect to the server. Please try again later.';
        }
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    return { email, password, login, loading, error, errors };
  }
};
</script>

<style scoped>
/* Geen nood om scoped stijlen toe te voegen, aangezien we dezelfde stijlen gebruiken als andere pagina's */
/* Optioneel: Voeg extra stijlen toe voor foutmeldingen of laadindicatoren */
</style>
