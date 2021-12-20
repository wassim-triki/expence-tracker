import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
