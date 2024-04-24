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
          <button class="buy-button">PROBEER NU</button>
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
          <button class="buy-button">PROBEER NU</button>
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
          <button class="buy-button">PROBEER NU</button>
        </div>
      </div>
    </main>

    <footer>
      <p class="footer-content">Footer</p>
    </footer>
  </div>
</template>

<script setup>
// Import your components or any scripts if needed
</script>

<style scoped>
.tarieven-view {
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}



.content {
  flex: 1;
  text-align: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-bottom: 1em;
}

.price-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.price-box {
  border: 1px solid #ccc;
  padding: 2em 1em;
  flex-basis: calc(33.333% - 20px);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.package-title {
  margin: 0;
  font-size: 1.25em;
  font-weight: normal;
  text-transform: uppercase;
  color: #333;
  text-align: center;
  width: 100%;
}

.price {
  font-size: 2em;
  font-weight: bold;
  margin: 0.5em 0;
  text-align: center;
  width: 100%;
}

.price-box ul {
  list-style: none;
  padding: 0;
  margin: 1em 0;
  text-align: center;
  width: 100%;
}

.price-box li {
  margin-bottom: 0.5em;
  font-size: 1em;
}

.buy-button {
  background-color: #4CAF50;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.3s ease;
  width: 100%;
}

.buy-button:hover {
  background-color: #45a049;
}

footer {
  border-top: 1px solid #ccc;
  padding: 1em 0;
  text-align: center;
}

.footer-content {
  margin: 0;
}
</style>
