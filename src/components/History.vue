<script setup lang="ts">
import { useTransactionStore } from '~/stores/transaction';

const store = useTransactionStore();
</script>

<template>
  <div>
    <h3 class="border-b border-[#bbb] pb-10px mt-40px mb-10px mx-0 font-bold">History</h3>
    <ul class="list">
      <li
        v-for="transaction in store.transactions"
        :key="transaction.id"
        :class="{
          'border-minus': transaction.type === 'expense',
          'border-plus': transaction.type === 'income',
        }"
        class="bg-white box-shadow text-gray-800 flex justify-between relative p-2.5 my-2.5"
      >
        {{ transaction.title }}
        <span>${{ transaction.amount }}</span>
        <button class="delete-btn" @click="store.removeTransaction(transaction.id)">x</button>
      </li>
    </ul>
  </div>
</template>
