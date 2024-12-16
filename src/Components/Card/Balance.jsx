import React, { useState, useEffect } from "react";
import { useBalance } from "../../context/Context.jsx";
import { FormatAmount } from "../../helper/Formats.js";

const Balance = () => {
  const { incomeData, transactions } = useBalance();
  const [exchangeRates, setExchangeRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("UZS");

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/UZS");
        const data = await response.json();
        setExchangeRates(data.rates);
      } catch (error) {
        console.error("Xatolik yuz berdi...", error);
      }
    };
    fetchExchangeRates();
  }, []);

  const convertCurrency = (amount) => {
    const rate = exchangeRates[selectedCurrency] || 1;
    return (amount * rate).toFixed(2);
  };

  const totalIncome = incomeData?.reduce((a, b) => a + +b?.amount, 0) || 0;
  const totalExpenses = transactions?.reduce((a, b) => a + +b?.amount, 0) || 0;
  const totalBalance = totalIncome - totalExpenses;

  return (
    <div className="container my-4">
      <div className="row mb-3">
        <div className="col">
          <select
            className="form-select"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row g-3">
        {/* Umumiy Balans */}
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3 shadow" style={{ height: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Umumiy balans</h5>
              <h2 className="fw-bold">
                {convertCurrency(totalBalance)} {selectedCurrency}
              </h2>
            </div>
          </div>
        </div>

        {/* Jami Daromad */}
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3 shadow" style={{ height: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Jami Daromad</h5>
              <ul className="list-group">
                {incomeData?.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item.description}
                    <span>
                      {convertCurrency(item.amount)} {selectedCurrency}
                    </span>
                  </li>
                ))}
              </ul>
              <h3 className="fw-bold mt-3">
                {convertCurrency(totalIncome)} {selectedCurrency}
              </h3>
            </div>
          </div>
        </div>

        {/* Jami Harajatlar */}
        <div className="col-md-4">
          <div className="card text-white bg-danger mb-3 shadow" style={{ height: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Jami Harajatlar</h5>
              <ul className="list-group">
                {transactions?.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item.description}
                    <span>
                      {convertCurrency(item.amount)} {selectedCurrency}
                    </span>
                  </li>
                ))}
              </ul>
              <h3 className="fw-bold mt-3">
                {convertCurrency(totalExpenses)} {selectedCurrency}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;