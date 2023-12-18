<script setup lang="ts">
import { useTransactionStore } from '~/stores/transaction';

const store = useTransactionStore();
</script>

<template>
  <div>
    <h4 class="m0 uppercase font-bold">Balance</h4>
    <h1 class="tracking-1px m0 font-bold text-3xl">${{ store.totalAmount }}</h1>
  </div>
  <div class="inc-exp-container box-shadow">
    <div>
      <h4 class="m0 uppercase font-bold">Income</h4>
      <p class="money money-plus">${{ store.totalIncome }}</p>
    </div>
    <div>
      <h4 class="m0 uppercase font-bold">Expense</h4>
      <p class="money money-minus">${{ store.totalExpense }}</p>
    </div>
  </div>
</template>
