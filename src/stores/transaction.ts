import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: 'income' | 'expense';
}

export const useTransactionStore = defineStore('transaction', () => {
  const transactions = ref<Transaction[]>([]);

  const addTransaction = (title: string, amount: number) => {
    const id = new Date().getTime();
    const transaction: Transaction = {
      id,
      title,
      amount,
      type: amount > 0 ? 'income' : 'expense',
    };
    transactions.value.push(transaction);
  };

  const removeTransaction = (id: number) => {
    const index = transactions.value.findIndex((transaction) => transaction.id === id);
    if (index !== -1) {
      transactions.value.splice(index, 1);
    }
  };

  return {
    transactions,
    addTransaction,
    removeTransaction,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTransactionStore, import.meta.hot));
}
