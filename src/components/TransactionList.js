import React, { useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";
import Transaction from "./Transaction";
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  useEffect(() => {
    console.log(transactions);
  }, [transactions]);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((t, i) => (
          <Transaction key={i} transaction={t} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
