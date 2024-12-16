import React from 'react';
import {useBalance} from "../../context/Context.jsx";
import {FormatAmount, FormatDate} from "../../helper/Formats.js";

const TotalIncome = () => {
    const {
        incomeData
    } = useBalance();
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Daromadlar Jadvali</h2>
            {incomeData.length ?
                <div>
                    {/* Daromadlar jadvali*/}
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Miqdor</th>
                                <th>Sana</th>
                            </tr>
                            </thead>
                            <tbody>
                            {incomeData.map((income) => (
                                <tr key={income.id}>
                                    <td>{FormatAmount(income.amount)}</td>
                                    <td>{FormatDate(income.date)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                : (
                    <div>
                        <h5 className={'text-center mt-4 text-bg-secondary py-3 rounded-2'}>
                            Daromad mavjud emas
                        </h5>
                    </div>
                )

            }
        </div>
    );
};

export default TotalIncome;
