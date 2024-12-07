<!-- src/views/RegisterView.vue -->
<template>
    <!-- Hoofdcontainer met een gradiënt achtergrond, minimale hoogte van het scherm en flexbox layout -->
    <div class="bg-gradient-to-br from-[#1f1c47] to-[#3b3b98] min-h-screen flex flex-col">
      <!-- Header component met witte tekst, padding en volledige breedte -->
      <Header class="text-white p-4 w-full" />
      
      <!-- Flex container om het formulier te centreren -->
      <div class="flex items-center justify-center flex-grow">
        <!-- Formuliercontainer met semi-transparante achtergrond, blurring effect, padding, vaste breedte, afgeronde hoeken en schaduw -->
        <div class="bg-white/10 backdrop-blur-lg p-10 w-80 rounded-lg shadow-lg text-center text-white">
          
          <!-- Avatar sectie -->
          <div class="flex justify-center mb-6">
            <!-- Ronde achtergrond voor de avatar met een SVG-icoon -->
            <div class="bg-gray-400/50 rounded-full h-20 w-20 flex items-center justify-center">
              <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <!-- SVG pad voor een eenvoudig avatar-icoon -->
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
  
          <!-- Registratieformulier -->
          <form @submit.prevent="handleRegister">
            
            <!-- Naam invoerveld -->
            <!--  v-model Bind het invoerveld aan de 'name' data property -->
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
  
            <!-- Email invoerveld -->
            <!--  v-model Bind het invoerveld aan de 'email' data property -->
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
  
            <!-- Wachtwoord invoerveld -->
            <!--  v-model Bind het invoerveld aan de 'password' data property -->
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
  
            <!-- Bevestig wachtwoord invoerveld -->
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
  
            <!-- Register knop -->
            <button type="submit" class="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded font-semibold hover:from-purple-600 hover:to-indigo-500 transition duration-300">
              REGISTER
            </button>
  
            <!-- Foutmelding sectie, zichtbaar als 'error' data property is ingesteld -->
            <p v-if="error" class="mt-4 text-red-500">{{ error }}</p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Importeer de Header component van het opgegeven pad
  import Header from '@/components/header/Header.vue'; 
  // Importeer de AuthService voor API-aanroepen
  import AuthService from '@/services/AuthService'; 
  
  export default {
    name: 'RegisterView', // Naam van de component
    components: {
      Header, // Registreer de Header component binnen deze component
    },
    data() {
      return {
        name: '', // Data property voor de naam invoer
        email: '', // Data property voor de email invoer
        password: '', // Data property voor het wachtwoord invoer
        password_confirmation: '', // Data property voor de wachtwoord bevestiging invoer
        error: null, // Data property voor het opslaan van foutmeldingen
      };
    },
    methods: {
      async handleRegister() { // Methode om het registratieproces te behandelen
        this.error = null; // Reset eventuele eerdere foutmeldingen
        try {
          // Controleer of het wachtwoord en de bevestiging overeenkomen
          if (this.password !== this.password_confirmation) {
            this.error = 'Passwords do not match.'; // Stel een foutmelding in als de wachtwoorden niet overeenkomen
            return; // Stop de uitvoering van de methode
          }
  
          // Maak een API-aanroep naar de register endpoint met de gebruikersgegevens
          const response = await AuthService.register({
            name: this.name,
            email: this.email,
            password: this.password,
          });
  
          // Sla het ontvangen access token op in localStorage
          localStorage.setItem('access_token', response.data.access_token);
  
          // Redirect de gebruiker naar de dashboard pagina na succesvolle registratie
          this.$router.push('/dashboard');
        } catch (err) { // Foutafhandeling als de API-aanroep mislukt
          if (err.response && err.response.data && err.response.data.errors) {
            // Combineer alle foutmeldingen van de API in één string en stel deze in
            this.error = Object.values(err.response.data.errors).flat().join(' ');
          } else if (err.response && err.response.data && err.response.data.message) {
            // Stel een algemene foutmelding in als er een bericht is
            this.error = err.response.data.message;
          } else {
            // Stel een standaard foutmelding in voor andere fouten
            this.error = 'An error occurred during registration.';
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Scoped stijlen die alleen van toepassing zijn op dit component */
  /* Geen extra stijlen toegevoegd omdat Tailwind CSS-klassen al de styling regelen */
  </style>
  