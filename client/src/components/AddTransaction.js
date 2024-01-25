import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

// Functional component for adding transactions
export const AddTransaction = () => {
  // State variables for text and amount using React Hooks
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // Accessing the addTransaction function from the GlobalContext
  const { addTransaction } = useContext(GlobalContext);

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();

    // Check if the entered amount is a valid number and not zero
    if (!isNaN(amount) && parseFloat(amount) !== 0) {
      // Creating a new transaction object
      const newTransaction = {
        id: Math.floor(Math.random() * 1000000000),
        text: text,
        amount: parseFloat(amount),
      };

      addTransaction(newTransaction);

      // Clearing the input fields after a successful transaction
      setText("");
      setAmount("");
    } else {
      alert("Please enter a valid amount.");
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
