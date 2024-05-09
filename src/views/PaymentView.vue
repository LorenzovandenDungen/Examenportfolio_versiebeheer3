<template>
  <div class="payment-container">
    <h1>Veilig Betalen</h1>
    <form @submit.prevent="processPayment" class="payment-form">
      <div class="form-group">
        <label for="cardNumber">Creditcardnummer</label>
        <input type="text" id="cardNumber" class="form-control" placeholder="1234 5678 9012 3456" required>
      </div>
      <div class="form-group">
        <label for="expiryDate">Vervaldatum</label>
        <input type="text" id="expiryDate" class="form-control" placeholder="MM/JJ" required>
      </div>
      <div class="form-group">
        <label for="cvv">CVV</label>
        <input type="text" id="cvv" class="form-control" placeholder="123" required>
      </div>
      <button type="submit" class="btn btn-primary">Betalen</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaymentView',
  methods: {
    processPayment() {
      // Hier zou je logica toevoegen om de betaling te verwerken
      // Dit kan het verzenden van betalingsgegevens naar een betalingsgateway omvatten
      // Vergeet niet om de gebruiker feedback te geven over het resultaat van de betaling
    }
  }
};
</script>
<style>
@import '../assets/styles.css/';
</style>
