import React, { useContext } from "react";
import { Context } from "./Context";
import Transaction from "./Transaction";

const TransactionList = () => {
  const {transactions,deleteTransaction} = useContext(Context);
  
  const transactionsElements = transactions.map(transaction => (
    <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>
  ))
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactionsElements}
      </ul>
    </>
  );
};

export default TransactionList;
