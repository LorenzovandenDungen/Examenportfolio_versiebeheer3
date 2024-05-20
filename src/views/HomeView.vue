<template>
  <div>
    <header>
      <nav>
        <div class="logo">Lorenzo</div>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/websites">Websites</router-link></li>
          <li><router-link to="/tarieven">Tarieven</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/offerte" class="button">Offerte</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <section class="hero">
        <h1>Website laten maken?</h1>
        <p>Dat kan</p>
        <button>Klik hier</button>
      </section>
      <section class="image-section">
        <img src="@/assets/landing_page_image.jpg" alt="Hero Image">
      </section>
      <section class="testimonials">
        <h2>Heading</h2>
        <p>Subheading to introduce testimonials</p>
        <div class="testimonial-cards">
          <div class="card" v-for="(testimonial, index) in testimonials" :key="index">
            <p>{{ testimonial.quote }}</p>
            <div class="card-footer">
              <div class="name">{{ testimonial.name }}</div>
              <div class="description">{{ testimonial.description }}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div class="footer-content">
        <div class="footer-logo">Lorenzo</div>
        <div class="footer-links">
          <div class="column">
            <h3>Topic</h3>
            <p>Page</p>
            <p>Page</p>
            <p>Page</p>
          </div>
          <div class="column">
            <h3>Topic</h3>
            <p>Page</p>
            <p>Page</p>
            <p>Page</p>
          </div>
          <div class="column">
            <h3>Topic</h3>
            <p>Page</p>
            <p>Page</p>
            <p>Page</p>
          </div>
        </div>
        <div class="social-media">
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          quote: "A terrific piece of praise",
          name: "Name",
          description: "Description"
        },
        {
          quote: "A fantastic bit of feedback",
          name: "Name",
          description: "Description"
        },
        {
          quote: "A genuinely glowing review",
          name: "Name",
          description: "Description"
        }
      ]
    };
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: #000;
}

.hero {
  text-align: center;
  padding: 50px 20px;
}

.hero h1 {
  font-size: 2.5rem;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
}

.hero button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}

.image-section {
  text-align: center;
}

.image-section img {
  width: 100%;
  height: auto;
}

.testimonials {
  text-align: center;
  padding: 50px 20px;
}

.testimonial-cards {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.card {
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f8f8;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.social-media {
  display: flex;
  gap: 10px;
}
</style>
