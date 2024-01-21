import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = parseFloat(amounts.reduce((acc, item) => (acc += item), 0));

  let sign = "";
  let formattedTotal;
  if (total < 0) {
    sign = "-";
    formattedTotal = Math.abs(total).toFixed(2);
  } else {
    formattedTotal = total.toFixed(2);
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
