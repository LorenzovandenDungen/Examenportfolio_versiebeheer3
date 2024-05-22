<template>
  <div class="p-4 sm:p-6">
    <h2 class="text-2xl font-bold mb-4">Payment Information</h2>
    <form @submit.prevent="submitPayment">
      <div class="mb-4">
        <label for="name" class="block text-sm font-bold mb-2">Name on Card</label>
        <input type="text" id="name" v-model="name" class="w-full p-2 border border-gray-300 rounded">
      </div>
      <div class="mb-4">
        <label for="cardNumber" class="block text-sm font-bold mb-2">Card Number</label>
        <input type="text" id="cardNumber" v-model="cardNumber" class="w-full p-2 border border-gray-300 rounded">
      </div>
      <div class="flex flex-col sm:flex-row justify-between mb-4">
        <div class="mb-4 sm:mb-0 sm:mr-2">
          <label for="expiry" class="block text-sm font-bold mb-2">Expiry Date</label>
          <input type="text" id="expiry" v-model="expiry" class="w-full p-2 border border-gray-300 rounded">
        </div>
        <div class="sm:ml-2">
          <label for="cvv" class="block text-sm font-bold mb-2">CVV</label>
          <input type="text" id="cvv" v-model="cvv" class="w-full p-2 border border-gray-300 rounded">
        </div>
      </div>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full sm:w-auto">Submit Payment</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaymentForm',
  data() {
    return {
      name: '',
      cardNumber: '',
      expiry: '',
      cvv: ''
    }
  },
  methods: {
    submitPayment() {
      // Payment submission logic
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
