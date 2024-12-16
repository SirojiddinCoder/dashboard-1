import React from "react";
import AllIncome from "../Modals/AllIncome.jsx";
import {TotalExpenses} from "../Modals/TotalExpensesModal.jsx";
import {useBalance} from "../../context/Context.jsx";
import {FormatAmount} from "../../helper/Formats.js";

const Balance = () => {
    const {incomeData, transactions} = useBalance();

    return (
        <div className="container my-4">
            <div className="row g-3">
                {/* Umumiy Balans */}
                <div className="col-md-4">
                    <div className="card text-white bg-primary mb-3 shadow" style={{height: "100%"}}>
                        <div className="card-body">
                            <h5 className="card-title">Umumiy balans</h5>
                            <h2 className="fw-bold">
                                {FormatAmount(incomeData?.reduce((a, b) => a + +b?.amount, 0) - transactions?.reduce((a, b) => a + +b?.amount, 0))} so'm
                            </h2>
                        </div>
                    </div>
                </div>
                {/* Jami Daromad */}
                <AllIncome/>
                {/* Jami Harajatlar */}
                <TotalExpenses/>
            </div>
            {/* Modals */}
        </div>
    );
};

export default Balance;
