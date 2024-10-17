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
        <form @submit.prevent="handleSubmit" class="space-y-6">
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
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'; // Zorg ervoor dat het pad klopt

export default {
  name: 'LoginView',
  components: {
    Header // Registreer de Header component
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      // Vervang dit met je eigen login logica
      console.log('Email:', this.email)
      console.log('Password:', this.password)
      // Voorbeeld: Redirect naar een andere pagina
      // this.$router.push('/dashboard');
    }
  }
}
</script>

<style scoped>
/* Geen nood om scoped stijlen toe te voegen, aangezien we dezelfde stijlen gebruiken als andere pagina's */
</style>
