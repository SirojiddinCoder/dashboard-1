import React from "react";
import "./Header.css";

export const Header = ({ onCurrencyChange, selectedCurrency, currencies }) => {
  return (
    <div className="HeaderOne text-white d-flex justify-content-between align-items-center p-3">
      <h1>Shaxsiy moliyaviy boshqaruv tizimi</h1>
      <select
        className="form-select w-auto"
        value={selectedCurrency}
        onChange={onCurrencyChange}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
