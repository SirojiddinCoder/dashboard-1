import React from 'react';
import {useBalance} from "../../context/Context.jsx";
import {FormatAmount, FormatDate} from "../../helper/Formats.js";

const ExpenseTable = () => {
    const {
        categories,
        filteredTransactions,
        handleCategoryFilter
    } = useBalance();
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Xarajatlar Jadvali</h2>
            {filteredTransactions.length ?
                <div>
                    <div className="row mb-3">
                        {/* Filter */}
                        <div className="col-md-4">
                            <select className="form-select"
                                    onChange={(e) => handleCategoryFilter(e.target.value)}>
                                
                                <option value="">Barchasi</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                   
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Nomi</th>
                                <th>Kategoriya</th>
                                <th>Miqdor</th>
                                <th>Sana</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredTransactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.name}</td>
                                    <td>{transaction.category}</td>
                                    <td>{FormatAmount(transaction.amount)}</td>
                                    <td>{FormatDate(transaction.date)}</td>
                                </tr>
                            ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                : (
                    <div>
                        <h5 className={'text-center mt-4 text-bg-secondary py-3 rounded-2'}>
                            Harajatlar mavjud emas
                        </h5>
                    </div>
                )

            }
        </div>
    )
        ;
};

export default ExpenseTable;
