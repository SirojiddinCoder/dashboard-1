import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Conver.css";

function Convert() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("UZS");
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://v6.exchangerate-api.com/v6/ab462a0d4c42d50ec63f0d4d/latest/USD"
        );
        setRates(response.data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };
    fetchRates();
  }, []);

  const handleConvert = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const converted = (amount / rates[fromCurrency]) * rates[toCurrency];
      setConvertedAmount(converted.toFixed(2));
    }
  };

  return (
    <div className="app-container">
      <h1>Valyuta Konvertori</h1>
      <div className="converter-container">
        <div className="input-container">
          <label>Menda bor:</label>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="input-container">
          <label>Olmoqchi bo'lgan valyuta:</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <button onClick={handleConvert}>Konvertatsiya qilish</button>

        <div className="result">
          <h3>Konvertatsiya qilingan summa:</h3>
          <p>
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Convert;