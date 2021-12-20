import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import uuid from "react-uuid";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(amount) != 0) {
      addTransaction({ id: uuid(), text, amount: Number(amount) });
    }
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
            value={text}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
