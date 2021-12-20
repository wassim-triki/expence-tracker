import React from "react";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions
    .reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {balance < 0 ? "-" : ""}${Math.abs(balance)}
      </h1>
    </>
  );
};

export default Balance;
