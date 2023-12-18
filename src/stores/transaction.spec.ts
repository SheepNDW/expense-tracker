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

  describe('total amount', () => {
    it('should calculate the total amount', () => {
      const store = useTransactionStore();
      const { addTransaction } = store;

      addTransaction('salary', 1000);
      addTransaction('rent', -500);

      expect(store.totalAmount).toBe(500);
    });
  });

  describe('total income', () => {
    it('should calculate the total income', () => {
      const store = useTransactionStore();
      const { addTransaction } = store;

      addTransaction('salary', 1000);
      addTransaction('rent', -500);

      expect(store.totalIncome).toBe(1000);
    });
  });

  describe('total expense', () => {
    it('should calculate the total expense', () => {
      const store = useTransactionStore();
      const { addTransaction } = store;

      addTransaction('salary', 1000);
      addTransaction('rent', -500);

      expect(store.totalExpense).toBe(-500);
    });
  });
});
