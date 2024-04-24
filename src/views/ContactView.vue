<template>
    <div class="contact-content">
      <section class="contact-info">
        <h1>Contact Information</h1>
        <p>Say something to start a live chat!</p>
        
        <div class="info">
          <i class="icon-phone"><!-- Phone icon here --></i>
          <p>+1012 3456 789</p>
        </div>
        
        <div class="info">
          <i class="icon-email"><!-- Email icon here --></i>
          <p>demo@gmail.com</p>
        </div>
        
        <div class="info">
          <i class="icon-location"><!-- Location icon here --></i>
          <p>132 Dartmouth Street Boston, Massachusetts 02116 United States</p>
        </div>
        
        <div class="social-links">
          <!-- Social media icons here -->
        </div>
      </section>

      <form class="contact-form">
        <div class="form-row">
          <div class="form-field half-width">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name">
          </div>

          <div class="form-field half-width">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name">
          </div>
        </div>

        <div class="form-row">
          <div class="form-field half-width">
            <label for="email">Email</label>
            <input type="email" id="email">
          </div>

          <div class="form-field half-width">
            <label for="phone-number">Phone Number</label>
            <input type="tel" id="phone-number">
          </div>
        </div>

        <div class="form-field">
          <label for="subject">Select Subject?</label>
          <select id="subject">
            <option>General Inquiry</option>
            <!-- Add more options here -->
          </select>
        </div>

        <div class="form-field">
          <label for="message">Message</label>
          <textarea id="message"></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
</template>

<script setup> 
</script>

<style scoped>
.contact-view {
  display: flex;
  flex-direction: column;
}

.contact-content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.contact-info {
  width: 50%;
  padding: 20px;
  background: #F0F2F5; /* Background color for contact information */
}

.contact-form {
  width: 50%;
  padding: 20px;
}

.form-row {
  display: flex;
  justify-content: space-between;
}

.form-field {
  margin-bottom: 20px;
  flex: 1;
}

.half-width {
  margin-right: 10px;
}

.form-field label {
  display: block;
  margin-bottom: 5px;
}

.form-field input[type="text"],
.form-field input[type="email"],
.form-field input[type="tel"],
.form-field select,
.form-field textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #CCC; /* Border color */
}

.form-field textarea {
  height: 150px; /* Adjust height as per design */
}

button[type="submit"] {
  width: 100%;
  padding: 15px 20px;
  background-color: #333; /* Button background color */
  color: white;
  border: none;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #444; /* Darker shade for hover effect */
}

.info {
  margin-bottom: 20px;
}


</style>
