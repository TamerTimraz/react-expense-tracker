import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

// Functional component to display the total balance
export const Balance = () => {
  // Accessing the transactions array from the GlobalContext
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  // Calculate the total balance by summing all amounts
  const total = parseFloat(amounts.reduce((acc, item) => (acc += item), 0));

  // Formats the total balance appropriately
  let sign = "";
  let formattedTotal;
  if (total < 0) {
    sign = "-";
    formattedTotal = numberWithCommas(Math.abs(total).toFixed(2));
  } else {
    formattedTotal = numberWithCommas(total.toFixed(2));
  }

  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {sign}${formattedTotal}
      </h1>
    </>
  );
};
