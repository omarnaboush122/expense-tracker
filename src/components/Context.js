import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const addNewTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  useEffect(() => {
    setTransactions(JSON.parse(localStorage.getItem("transactions")));
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <Context.Provider
      value={{ transactions, deleteTransaction, addNewTransaction }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
