<template>
  <div>
    <div class="offerte-container">
      <div class="offerte-content">
        <h1>Offerte Aanvragen</h1>
        <p>Vul onderstaand formulier in en wij nemen zo spoedig mogelijk contact met u op.</p>
        <form class="offerte-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="naam">Naam:</label>
            <input type="text" id="naam" v-model="naam" required>
          </div>
          <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="telefoon">Telefoon:</label>
            <input type="tel" id="telefoon" v-model="telefoon" required>
          </div>
          <div class="form-group">
            <label for="bericht">Bericht:</label>
            <textarea id="bericht" v-model="bericht" required></textarea>
          </div>
          <button type="submit">Verzend Offerte</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const naam = ref('');
const email = ref('');
const telefoon = ref('');
const bericht = ref('');

const submitForm = () => {
  // Logica om het formulier te verzenden
  console.log('Naam:', naam.value);
  console.log('E-mail:', email.value);
  console.log('Telefoon:', telefoon.value);
  console.log('Bericht:', bericht.value);
}
</script>

<style>
@import '../assets/styles.css/';
</style>
