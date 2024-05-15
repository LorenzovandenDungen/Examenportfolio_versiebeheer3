<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark-subtle">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Lorenzo</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/websites">Websites</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tarieven">Tarieven</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/offerte">Offerte</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">Dashboard</router-link> 
            </li>
          </ul>

          <router-link class="nav-link login-button" to="/login">Login</router-link>
          <router-link class="nav-link signup-button" to="/signup">Sign-up</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeader'
  // Your existing script can remain as is, it's not affected by the style changes.
}
</script>

<style scoped>
.header {
  border-bottom: 2px solid #000;
  background-color: #fff;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 1.5em;
  color: #000;
}

.navbar-nav {
  display: flex;
  list-style: none;
  padding-left: 0;
}

.nav-item {
  padding: 0 10px;
}

.nav-link {
  color: #000;
  text-decoration: none;
}

/* Styles for mobile navbar toggler */
.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* This is assuming you want the Login and Sign-up to look like buttons */
.login-button, .signup-button {
  padding: 5px 15px;
  margin-left: 10px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.login-button:hover, .signup-button:hover {
  border: 1px solid #007bff;
}

.signup-button {
  background-color: #007bff;
  color: #fff;
}

.signup-button:hover {
  background-color: #0056b3;
}

/* Media query for responsive adjustments */
@media (max-width: 992px) {
  .navbar-nav {
    flex-direction: column;
  }
  .nav-item {
    padding: 5px 0;
  }
}
</style>
