<template>
  <div class="payment-container">
    <h1>Veilig Betalen</h1>
    <div class="payment-methods">
      <button class="method-tab">Card</button>
      <button class="method-tab">iDEAL</button>
      <button class="method-tab">PayPal</button>
    </div>
    <form @submit.prevent="processPayment" class="payment-form">
      <div class="form-group">
        <label for="cardNumber">Creditcardnummer</label>
        <input type="text" id="cardNumber" class="form-control" placeholder="1234 1234 1234 1234" required>
      </div>
      <div class="form-group">
        <label for="expiryDate">Vervaldatum</label>
        <input type="text" id="expiryDate" class="form-control" placeholder="MM / JJ" required>
      </div>
      <div class="form-group">
        <label for="cvv">CVC</label>
        <input type="text" id="cvv" class="form-control" placeholder="CVC" required>
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <select id="country" class="form-control">
          <option>United States</option>
        </select>
      </div>
      <div class="form-group">
        <label for="postalCode">Postal code</label>
        <input type="text" id="postalCode" class="form-control" placeholder="90210" required>
      </div>
      <button type="submit" class="btn btn-primary">Betalen</button>
    </form>
  </div>
</template>

<style>
@import '../assets/styles.css/';
</style>
