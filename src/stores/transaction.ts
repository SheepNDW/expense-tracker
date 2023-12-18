import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref, computed } from 'vue';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: 'income' | 'expense';
}

export const useTransactionStore = defineStore('transaction', () => {
  const transactions = ref<Transaction[]>([]);

  const totalAmount = computed(() => {
    return transactions.value.reduce((total, transaction) => total + transaction.amount, 0);
  });

  const totalIncome = computed(() => {
    return transactions.value.reduce((total, transaction) => {
      if (transaction.type === 'income') {
        return total + transaction.amount;
      }
      return total;
    }, 0);
  });

  const totalExpense = computed(() => {
    return transactions.value.reduce((total, transaction) => {
      if (transaction.type === 'expense') {
        return total + transaction.amount;
      }
      return total;
    }, 0);
  });

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
    totalAmount,
    totalIncome,
    totalExpense,
    addTransaction,
    removeTransaction,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTransactionStore, import.meta.hot));
}
