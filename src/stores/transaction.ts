import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: 'income' | 'expense';
}

export const useTransactionStore = defineStore('transaction', () => {
  const transactions = ref<Transaction[]>([
    {
      id: 1,
      title: 'salary',
      amount: 1000,
      type: 'income',
    },
    {
      id: 2,
      title: 'Gas',
      amount: -30.5,
      type: 'expense',
    },
  ]);

  return {
    transactions,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTransactionStore, import.meta.hot));
}
