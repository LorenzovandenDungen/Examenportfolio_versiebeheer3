<template>
    <div class="bg-gradient-to-br from-[#1f1c47] to-[#3b3b98] min-h-screen flex flex-col">
      <Header class="text-white p-4 w-full" />
      <div class="flex items-center justify-center flex-grow">
        <div class="bg-white/10 backdrop-blur-lg p-10 w-80 rounded-lg shadow-lg text-center text-white">
          <!-- Avatar -->
          <div class="flex justify-center mb-6">
            <div class="bg-gray-400/50 rounded-full h-20 w-20 flex items-center justify-center">
              <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
  
          <!-- Form -->
          <form @submit.prevent="handleRegister">
            <!-- Name Input -->
            <div class="mb-4 text-left">
              <label for="name" class="block text-sm font-medium">Name</label>
              <input
                v-model="name"
                type="text"
                id="name"
                class="w-full p-2 mt-1 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Name"
                required
              />
            </div>
  
            <!-- Email Input -->
            <div class="mb-4 text-left">
              <label for="email" class="block text-sm font-medium">Email ID</label>
              <input
                v-model="email"
                type="email"
                id="email"
                class="w-full p-2 mt-1 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email ID"
                required
              />
            </div>
  
            <!-- Password Input -->
            <div class="mb-4 text-left">
              <label for="password" class="block text-sm font-medium">Password</label>
              <input
                v-model="password"
                type="password"
                id="password"
                class="w-full p-2 mt-1 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Password"
                required
                minlength="8"
              />
            </div>
  
            <!-- Confirm Password Input -->
            <div class="mb-4 text-left">
              <label for="password_confirmation" class="block text-sm font-medium">Confirm Password</label>
              <input
                v-model="password_confirmation"
                type="password"
                id="password_confirmation"
                class="w-full p-2 mt-1 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm Password"
                required
                minlength="8"
              />
            </div>
  
            <!-- Register Button -->
            <button type="submit" class="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded font-semibold hover:from-purple-600 hover:to-indigo-500 transition duration-300">
              REGISTER
            </button>
  
            <!-- Error Message -->
            <p v-if="error" class="mt-4 text-red-500">{{ error }}</p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '@/components/header/Header.vue'; // Zorg ervoor dat het pad klopt
  import AuthService from '@/services/AuthService'; // Importeer de AuthService
  
  export default {
    name: 'RegisterView',
    components: {
      Header, // Registreer de Header component
    },
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        error: null,
      };
    },
    methods: {
      async handleRegister() {
        this.error = null;
        try {
          // Valideer dat het wachtwoord en bevestiging overeenkomen
          if (this.password !== this.password_confirmation) {
            this.error = 'Passwords do not match.';
            return;
          }
  
          // Aanroep naar de register API
          const response = await AuthService.register({
            name: this.name,
            email: this.email,
            password: this.password,
          });
  
          // Sla het token op
          localStorage.setItem('access_token', response.data.access_token);
  
          // Optioneel: Redirect naar een andere pagina, bijvoorbeeld dashboard
          this.$router.push('/dashboard');
        } catch (err) {
          if (err.response && err.response.data && err.response.data.errors) {
            // Combineer alle foutmeldingen tot één string
            this.error = Object.values(err.response.data.errors).flat().join(' ');
          } else if (err.response && err.response.data && err.response.data.message) {
            this.error = err.response.data.message;
          } else {
            this.error = 'An error occurred during registration.';
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Geen nood om scoped stijlen toe te voegen, aangezien we dezelfde stijlen gebruiken als andere pagina's */
  </style>
  