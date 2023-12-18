import { beforeEach, describe, expect, it } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useTransactionStore } from '~/stores/transaction';

describe('Transaction Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe('add transaction', () => {
    it('should add a negative transaction', () => {
      const store = useTransactionStore();
      const { addTransaction } = store;

      addTransaction('rent', -1000);
      const transaction = store.transactions.at(-1);

      expect(transaction).toEqual({
        id: expect.any(Number),
        title: 'rent',
        amount: -1000,
        type: 'expense',
      });
    });

    it('should add a positive transaction', () => {
      const store = useTransactionStore();
      const { addTransaction } = store;

      addTransaction('salary', 1000);
      const transaction = store.transactions.at(-1);

      expect(transaction).toEqual({
        id: expect.any(Number),
        title: 'salary',
        amount: 1000,
        type: 'income',
      });
    });
  });

  describe('remove transaction', () => {
    it('should remove a transaction', () => {
      const store = useTransactionStore();
      const { addTransaction, removeTransaction } = store;

      addTransaction('rent', -1000);
      const transaction = store.transactions.at(-1)!;

      removeTransaction(transaction.id);

      const removedTransaction = store.transactions.find((t) => t.id === transaction.id);
      expect(removedTransaction).toBeUndefined();
    });

    it('should not remove a transaction if the id does not exist', () => {
      const store = useTransactionStore();
      const { removeTransaction, addTransaction } = store;

      addTransaction('rent', -1000);
      removeTransaction(999);

      expect(store.transactions.length).toBe(1);
    });
  });
});
