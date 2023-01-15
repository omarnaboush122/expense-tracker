import { useContext } from "react";
import { Context } from "./Context";



const IncomeExpenses = () => {
  const transactions = useContext(Context);
  const amount = transactions.map(transaction => transaction.amount)
  const income = amount.filter(amount => amount > 0);
  const totalIncome = income.reduce((acc,curr) => {
    return acc + curr;
  },0).toFixed(2);
  
  const expense = amount.filter(amount => amount < 0);
  const totalExpense = expense.reduce((acc,curr) => {
    return acc + curr;
  },0).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${totalExpense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
