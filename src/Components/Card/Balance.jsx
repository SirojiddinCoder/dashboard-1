import React, { useState, useEffect } from "react";
import AllIncome from "../Modals/AllIncome.jsx";
import { TotalExpenses } from "../Modals/TotalExpensesModal.jsx";
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
        console.error("Failed to fetch exchange rates", error);
      }
    };
    fetchExchangeRates();
  }, []);


  const convertCurrency = (amount) => {
    const rate = exchangeRates[selectedCurrency] || 1; 
    return (amount * rate).toFixed(2); 
  };

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
                {convertCurrency(
                  incomeData?.reduce((a, b) => a + +b?.amount, 0) -
                    transactions?.reduce((a, b) => a + +b?.amount, 0)
                )} {selectedCurrency}
              </h2>
            </div>
          </div>
        </div>
        {/* Jami Daromad */}
        <AllIncome convertCurrency={convertCurrency} selectedCurrency={selectedCurrency} />
        {/* Jami Harajatlar */}
        <TotalExpenses convertCurrency={convertCurrency} selectedCurrency={selectedCurrency} />
      </div>
    </div>
  );
};

export default Balance;