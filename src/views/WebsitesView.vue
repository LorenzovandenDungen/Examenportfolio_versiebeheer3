<template>
  <div class="container websites-view">
    <h1 class="my-4">Websites</h1>
    <div class="package-catalog mb-4">
      <h2 class="my-3">Kies uw websitepakket</h2>
      <div class="row">
        <div class="col-md-4" v-for="(pkg, index) in packages" :key="index">
          <PackageCard :pkg="pkg" @compare="comparePackage" />
        </div>
      </div>
      <div v-if="comparisonPackages.length > 0" class="comparison-section my-4">
        <h2 class="my-3">Vergelijk Pakketten</h2>
        <div class="row">
          <div class="col-md-4" v-for="(pkg, index) in comparisonPackages" :key="index">
            <PackageCard :pkg="pkg" @remove="removeComparison" :isComparison="true" />
          </div>
        </div>
      </div>
    </div>
    <PaymentForm
      :selectedMethod="selectedMethod"
      :paymentDetails="paymentDetails"
      @submit="processPayment"
      @selectMethod="selectMethod"
      :errorMessage="errorMessage"
    />
  </div>
</template>

<script>
import PackageCard from '@/components/PackageCard.vue';
import PaymentForm from '@/components/PaymentForm.vue';

export default {
  components: {
    PackageCard,
    PaymentForm,
  },
  data() {
    return {
      packages: [
        { name: 'Basic', description: 'Een eenvoudig pakket voor starters', price: 100 },
        { name: 'Standard', description: 'Een standaard pakket met meer functies', price: 200 },
        { name: 'Premium', description: 'Een uitgebreid pakket voor gevorderden', price: 300 },
      ],
      comparisonPackages: [],
      selectedMethod: 'card',
      paymentDetails: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        country: '',
        postalCode: '',
      },
      errorMessage: '',
    };
  },
  methods: {
    comparePackage(pkg) {
      if (!this.comparisonPackages.includes(pkg)) {
        this.comparisonPackages.push(pkg);
      }
    },
    removeComparison(pkg) {
      this.comparisonPackages = this.comparisonPackages.filter((item) => item !== pkg);
    },
    selectMethod(method) {
      this.selectedMethod = method;
    },
    async processPayment() {
      this.errorMessage = '';
      try {
        await this.mockApiCall(this.paymentDetails);
        alert('Payment processed successfully for ' + this.selectedMethod);
      } catch (error) {
        console.error('Payment processing error:', error);
        this.errorMessage = 'There was an error processing your payment. Please try again.';
      }
    },
    async mockApiCall(details) {
      // Simulate API call
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) resolve('Success');
          else reject('Payment failed');
        }, 1000);
      });
    },
  },
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
</style>
