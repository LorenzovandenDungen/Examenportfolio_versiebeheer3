<template>
  <div class="vertical-container">
    <section class="main-content">
      <h1>Werkwijze</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <!-- Updated button styling and position -->
      <div class="button-container">
        <button @click="goToContact">Contact</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goToContact() {
      // Logic to navigate to the contact page
    }
  }
}
</script>

<style scoped>
.vertical-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure it at least fills the viewport */
}

nav .nav-list {
  display: flex;
  justify-content: space-between; /* Distribute space between items evenly */
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid black;
}

nav .nav-list li {
  border: none; /* Remove individual borders */
  padding: 0.5rem 1rem;
}

nav .nav-list li a {
  display: block;
  text-decoration: none;
  color: black;
  text-align: center;
  border: 1px solid black; /* Add border to the anchor instead of li */
  padding: 0.5rem 1rem; /* Matching padding to li */
}

nav .nav-list li a.active {
  position: relative; /* For the arrow/pointer to be positioned */
}

nav .nav-list li a.active::after {
  content: '';
  position: absolute;
  bottom: -10px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid black; /* Creates a downward pointing arrow */
}

.main-content {
  flex-grow: 1; /* Allows the content to grow and push the footer down */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  padding: 20px;
  text-align: center;
}

.button-container {
  margin-top: 2rem; /* Space above the button */
}

footer {
  border-top: 1px solid black;
  text-align: center;
  padding: 10px 0;
  margin-top: auto; /* Pushes footer to the bottom */
}

</style>
