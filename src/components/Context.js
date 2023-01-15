import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "flower", amount: -20 },
    { id: 2, text: "salary", amount: 300 },
    { id: 3, text: "book", amount: -10 },
    { id: 4, text: "camera", amount: 150 },
  ]);

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <Context.Provider value={{ transactions, deleteTransaction }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
