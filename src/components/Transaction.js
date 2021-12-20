import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  console.log(deleteTransaction);
  const isIncome = transaction.amount > 0;
  return (
    <li className={isIncome ? "plus" : "minus"}>
      {transaction.text}{" "}
      <span>
        {isIncome ? "+" : "-"}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
