import { useContext } from "react";
import { Context } from "./Context";


const Balance = () => {
  const {transactions} = useContext(Context);
  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((acc,curr) => {
    return acc + curr;
  },0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
}

export default Balance;
