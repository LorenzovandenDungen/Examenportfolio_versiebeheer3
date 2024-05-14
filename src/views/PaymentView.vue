<template>
  <div class="payment-container">
    <h1>Veilig Betalen</h1>
    <div class="payment-methods">
      <button class="method-tab" @click="selectMethod('card')" aria-label="Select Credit Card Payment">Card</button>
      <button class="method-tab" @click="selectMethod('ideal')" aria-label="Select iDEAL Payment">iDEAL</button>
      <button class="method-tab" @click="selectMethod('paypal')" aria-label="Select PayPal Payment">PayPal</button>
    </div>
    <form @submit.prevent="processPayment" class="payment-form">
      <div v-if="selectedMethod === 'card'">
        <div class="form-group">
          <label for="cardNumber">Creditcardnummer</label>
          <input type="text" id="cardNumber" class="form-control" placeholder="1234 1234 1234 1234" required aria-label="Credit Card Number">
        </div>
        <div class="form-group">
          <label for="expiryDate">Vervaldatum</label>
          <input type="text" id="expiryDate" class="form-control" placeholder="MM / JJ" required aria-label="Expiry Date">
        </div>
        <div class="form-group">
          <label for="cvv">CVC</label>
          <input type="text" id="cvv" class="form-control" placeholder="CVC" required aria-label="CVC">
        </div>
      </div>
      <div v-if="selectedMethod === 'ideal'">
        <!-- iDEAL specific fields can be added here -->
        <p>iDEAL Payment Selected</p>
      </div>
      <div v-if="selectedMethod === 'paypal'">
        <!-- PayPal specific fields can be added here -->
        <p>PayPal Payment Selected</p>
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <select id="country" class="form-control" aria-label="Country">
          <option>United States</option>
          <option>Netherlands</option>
          <option>Belgium</option>
          <option>Germany</option>
          <!-- Add more countries as needed -->
        </select>
      </div>
      <div class="form-group">
        <label for="postalCode">Postal code</label>
        <input type="text" id="postalCode" class="form-control" placeholder="90210" required aria-label="Postal Code">
      </div>
      <button type="submit" class="btn btn-primary" aria-label="Submit Payment">Betalen</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMethod: 'card', // default payment method
    };
  },
  methods: {
    selectMethod(method) {
      this.selectedMethod = method;
    },
    processPayment() {
      // Payment processing logic here
      alert('Payment processed for ' + this.selectedMethod);
    }
  }
};
</script>

<style scoped>
@import '../assets/styles.css';

/* Additional styles for better UI/UX can be added here */
</style>
