import React from 'react'
import {Header} from './Components/Header/Header'
import Balance from './Components/Card/Balance'
import Charts from './Components/Charts/Charts'
import TotalExpenses from './Components/Tables/TotalExpenses.jsx'
import './App.css'
import TotalIncome from "./Components/Tables/TotalIncome.jsx";

export default function App() {
    return (
        <div>
            <Header/>
            <Balance/>
            <Charts/>
            <TotalExpenses/>
            {/* jami daromadlar agar kerak bo'lsa*/}
            <TotalIncome/>
        </div>
    )
}
