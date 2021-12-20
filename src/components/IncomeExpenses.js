import React from "react";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";

const IncomeExpences = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0)
    .toFixed(2);
  const expences = Math.abs(
    transactions
      .filter((t) => t.amount < 0)
      .reduce((acc, curr) => acc + curr.amount, 0)
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expences}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpences;
