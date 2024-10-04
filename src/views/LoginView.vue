<template>
  <div class="bg-gradient-to-r from-blue-900 to-purple-900 min-h-screen text-white">
    <header class="flex flex-col md:flex-row justify-between items-center p-6">
      <div class="logo text-2xl font-bold mb-4 md:mb-0">Lorenzo</div>
      <nav>
        <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
          <li><router-link to="/websites" class="hover:text-gray-300">Websites</router-link></li>
          <li><router-link to="/tarieven" class="hover:text-gray-300">Tarieven</router-link></li>
          <li><router-link to="/contact" class="hover:text-gray-300">Contact</router-link></li>
          <li>
            <router-link
              to="/offerte"
              class="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded hover:from-purple-600 hover:to-blue-600"
            >
              Offerte
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
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
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      // Replace this with your actual login logic
      console.log('Email:', this.email)
      console.log('Password:', this.password)
      // Example: Redirect to another page
      // this.$router.push('/dashboard');
    }
  }
}
</script>
<style scoped>
/* No need to add scoped styles as we are using the same styles as other pages */
</style>
