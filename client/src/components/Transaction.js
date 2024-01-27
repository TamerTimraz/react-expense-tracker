import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

// Functional component to display a single transaction
export const Transaction = ({ transaction }) => {
  // Accessing the deleteTransaction function from the GlobalContext
  const { deleteTransaction } = useContext(GlobalContext);

  // Determine whether the transaction is an income (+) or expense (-)
  const sign = transaction.amount < 0 ? "-" : "+";

  // Format the transaction amount with two decimal places
  let formattedAmount;
  if (transaction.amount < 0) {
    formattedAmount = numberWithCommas(Math.abs(transaction.amount).toFixed(2));
  } else {
    formattedAmount = numberWithCommas(transaction.amount.toFixed(2));
  }

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${formattedAmount}
      </span>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
