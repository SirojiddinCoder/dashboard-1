import React from 'react';
import { useBalance } from "../../context/Context.jsx";
import { FormatAmount, FormatDate } from "../../helper/Formats.js";

const ExpenseTable = () => {
    const {
        categories,
        filteredTransactions,
        handleCategoryFilter
    } = useBalance();

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4 text-primary">Xarajatlar Jadvali</h2>
            {filteredTransactions.length ? (
                <div>
                    {/* Filter */}
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-6">
                            <select
                                className="form-select border-primary shadow-sm"
                                onChange={(e) => handleCategoryFilter(e.target.value)}
                            >
                                <option value="">Barchasi</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="table-responsive">
                        <table className="table table-hover shadow-sm">
                            <thead className="table-primary">
                                <tr>
                                    <th>Nomi</th>
                                    <th>Kategoriya</th>
                                    <th>Miqdor</th>
                                    <th>Sana</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTransactions.map((transaction) => (
                                    <tr key={transaction.id} className="align-middle">
                                        <td>{transaction.name}</td>
                                        <td>{transaction.category}</td>
                                        <td className="text-danger fw-bold">
                                            {FormatAmount(transaction.amount)}
                                        </td>
                                        <td>{FormatDate(transaction.date)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div>
                    <h5 className="text-center mt-4 text-secondary py-3 rounded-2 bg-light border">
                        Harajatlar mavjud emas
                    </h5>
                </div>
            )}
        </div>
    );
};

export default ExpenseTable;
