<template>
  <div class="container websites-view">
    <h1 class="my-4">Websites</h1>
    <div class="package-catalog mb-4">
      <h2 class="my-3">Kies uw websitepakket</h2>
      <div class="row">
        <div class="col-md-4" v-for="(pkg, index) in packages" :key="index">
          <div class="card mb-4">
            <div class="card-body">
              <h3 class="card-title">{{ pkg.name }}</h3>
              <p class="card-text">{{ pkg.description }}</p>
              <p class="card-text"><strong>Kosten:</strong> {{ pkg.price }} EUR</p>
              <button class="btn btn-secondary" @click="comparePackage(pkg)">Vergelijk</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="comparisonPackages.length > 0" class="comparison-section my-4">
        <h2 class="my-3">Vergelijk Pakketten</h2>
        <div class="row">
          <div class="col-md-4" v-for="(pkg, index) in comparisonPackages" :key="index">
            <div class="card mb-4">
              <div class="card-body">
                <h3 class="card-title">{{ pkg.name }}</h3>
                <p class="card-text">{{ pkg.description }}</p>
                <p class="card-text"><strong>Kosten:</strong> {{ pkg.price }} EUR</p>
                <button class="btn btn-danger" @click="removeComparison(index)">Verwijder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="processPayment" class="payment-form">
      <h2 class="my-3">Veilig Betalen</h2>
      <div class="btn-group mb-3" role="group" aria-label="Payment methods">
        <button type="button" class="btn btn-outline-primary" @click="selectMethod('card')" :class="{ active: selectedMethod === 'card' }">Card</button>
        <button type="button" class="btn btn-outline-primary" @click="selectMethod('ideal')" :class="{ active: selectedMethod === 'ideal' }">iDEAL</button>
        <button type="button" class="btn btn-outline-primary" @click="selectMethod('paypal')" :class="{ active: selectedMethod === 'paypal' }">PayPal</button>
      </div>
      <div v-if="selectedMethod === 'card'">
        <div class="form-group">
          <label for="cardNumber">Creditcardnummer</label>
          <input type="text" id="cardNumber" class="form-control" v-model="paymentDetails.cardNumber" placeholder="1234 1234 1234 1234" required>
        </div>
        <div class="form-group">
          <label for="expiryDate">Vervaldatum</label>
          <input type="text" id="expiryDate" class="form-control" v-model="paymentDetails.expiryDate" placeholder="MM / JJ" required>
        </div>
        <div class="form-group">
          <label for="cvv">CVC</label>
          <input type="text" id="cvv" class="form-control" v-model="paymentDetails.cvv" placeholder="CVC" required>
        </div>
      </div>
      <div v-if="selectedMethod === 'ideal'">
        <!-- iDEAL specific fields -->
        <p>iDEAL Payment Selected</p>
      </div>
      <div v-if="selectedMethod === 'paypal'">
        <!-- PayPal specific fields -->
        <p>PayPal Payment Selected</p>
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <select id="country" class="form-control" v-model="paymentDetails.country">
          <option>United States</option>
          <option>Netherlands</option>
          <option>Belgium</option>
          <option>Germany</option>
          <!-- Add more countries as needed -->
        </select>
      </div>
      <div class="form-group">
        <label for="postalCode">Postal code</label>
        <input type="text" id="postalCode" class="form-control" v-model="paymentDetails.postalCode" placeholder="90210" required>
      </div>
      <button type="submit" class="btn btn-primary">Betalen</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packages: [
        { name: 'Basic', description: 'Een eenvoudig pakket voor starters', price: 100 },
        { name: 'Standard', description: 'Een standaard pakket met meer functies', price: 200 },
        { name: 'Premium', description: 'Een uitgebreid pakket voor gevorderden', price: 300 }
      ],
      comparisonPackages: [],
      selectedMethod: 'card',
      paymentDetails: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        country: '',
        postalCode: ''
      }
    };
  },
  methods: {
    comparePackage(pkg) {
      if (!this.comparisonPackages.includes(pkg)) {
        this.comparisonPackages.push(pkg);
      }
    },
    removeComparison(index) {
      this.comparisonPackages.splice(index, 1);
    },
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
.websites-view {
  padding: 20px;
}
.package-catalog {
  margin-bottom: 20px;
}
.payment-form {
  margin-top: 20px;
}
.payment-methods .btn {
  margin-right: 10px;
}
.form-group {
  margin-bottom: 15px;
}
</style>
