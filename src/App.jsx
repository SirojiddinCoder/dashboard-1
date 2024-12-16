import React from 'react'
import { Header } from './Components/Header/Header'
import Balance from './Components/Card/Balance'
import Charts from './Components/Charts/Charts'
import Table from './Components/Table/Table'

export default function App() {
  return (
    <div>
      <Header />
   <Balance />  
   <Charts />
   <Table />

    </div>
  )
}
