import React from 'react';
import { Header } from './Components/Header/Header';
import Balance from './Components/Card/Balance';
import Charts from './Components/Charts/Charts';
import TotalExpenses from './Components/Tables/TotalExpenses.jsx';
import TotalIncome from './Components/Tables/TotalIncome.jsx';
import './App.css';

export default function App() {
    return (
        <div className='pb-5'>
          
            <Header
                onCurrencyChange={(e) => console.log("Currency changed to", e.target.value)}
                selectedCurrency="USD"
                currencies={["USD", "EUR", "UZS"]}
            />
            <Balance />

            <Charts />

            <div>
                <TotalExpenses />
                <TotalIncome />
            </div>
        </div>
    );
}
