<template>
  <div class="tarieven-view">
    <header>
      <!-- Navigation goes here -->
    </header>

    <main class="content">
      <h1 class="title">Tarieven</h1>
      <div class="price-container">
        <div class="price-box">
          <h2 class="package-title">BUDGET</h2>
          <p class="price">€150</p>
          <ul>
            <li>✔ Nieuw Design</li>
            <li>✔ One Pager</li>
            <li>✔ Domeinnaam</li>
            <li>✔ 100% jouw eigendom</li>
          </ul>
          <button class="buy-button" @click="navigateToPayment">PROBEER NU</button> <!-- Koppel deze knop aan de betaalpagina -->
        </div>
        <div class="price-box">
          <h2 class="package-title">PREMIUM</h2>
          <p class="price">€350</p>
          <ul>
            <li>✔ Nieuw Design</li>
            <li>✔ Vijf Pagina's</li>
            <li>✔ Gratis StockFoto's</li>
            <li>✔ Domeinnaam</li>
            <li>✔ 100% jouw eigendom</li>
          </ul>
          <button class="buy-button" @click="navigateToPayment">PROBEER NU</button> <!-- Koppel deze knop aan de betaalpagina -->
        </div>
        <div class="price-box">
          <h2 class="package-title">PRO</h2>
          <p class="price">€550</p>
          <ul>
            <li>✔ Nieuw Design</li>
            <li>✔ Vijf Pagina's</li>
            <li>✔ Gratis StockFoto's</li>
            <li>✔ Domeinnaam</li>
            <li>✔ 100% jouw eigendom</li>
            <li>✔ Korting op SEO tekst</li>
            <li>✔ Slider op homepage</li>
          </ul>
          <button class="buy-button" @click="navigateToPayment">PROBEER NU</button> <!-- Koppel deze knop aan de betaalpagina -->
        </div>
      </div>
    </main>

    <footer>
      <p class="footer-content">Footer</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToPayment = () => {
  router.push('/betalen'); // Hier wordt genavigeerd naar de betaalpagina
};
</script>

<style scoped>
@import '../assets/styles.css';
</style>
