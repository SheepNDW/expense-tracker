<script setup lang="ts">
import { ref } from 'vue';
import { useTransactionStore } from '~/stores/transaction';

const store = useTransactionStore();

const title = ref('');
const amount = ref(0);

const handleSubmit = () => {
  store.addTransaction(title.value, amount.value);
  title.value = '';
  amount.value = 0;
};
</script>

<template>
  <div>
    <h3 class="border-b border-[#bbb] pb-10px mt-40px mb-10px mx-0 font-bold">
      Add New Transaction
    </h3>
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" placeholder="enter text..." v-model="title" />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount<br />
        (negative - expense, positive - income)</label
      >
      <input type="number" placeholder="enter amount..." v-model="amount" />
    </div>
    <button class="btn focus:outline-0" @click="handleSubmit">新增記錄</button>
  </div>
</template>
