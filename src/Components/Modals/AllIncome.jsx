import React, {useState} from "react";
import {useBalance} from "../../context/Context.jsx";
import {FormatAmount} from "../../helper/Formats.js";

const AllIncome = () => {
    const {
        incomeFormdata,
        handleSaveIncome,
        handleInputChangeIncome,
        showModalIncome,
        handleShowModalIncome,
        handleCloseModalIncome,
        incomeData
    } = useBalance();

    return (
        <div className="col-md-4">
            <div className="card border-light shadow mb-3" style={{height: "100%"}}>
                <div className="card-body">
                    <h5 className="card-title fw-bold">Jami Daromad</h5>
                    <p className="fs-4"> {FormatAmount(incomeData.reduce((a, b) => a + +b?.amount, 0))} so'm </p>
                    <button className="btn btn-primary w-100" onClick={handleShowModalIncome}>Kirimlar</button>
                </div>
            </div>

            {/* Modals */}
            {showModalIncome && (
                <div className="modal fade show d-block bg-black bg-opacity-50 " tabIndex="-1" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Kirim Ma'lumotlarini Kiriting</h5>
                                <button
                                    className="closebtn bg-danger rounded-5 border-0 p-2 text-white position-absolute"
                                    onClick={handleCloseModalIncome}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSaveIncome}>
                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">Miqdor</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="amount"
                                            name="amount"
                                            value={incomeFormdata?.amount}
                                            onChange={handleInputChangeIncome}
                                            placeholder="Miqdor kiriting"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Sana</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="date"
                                            name="date"
                                            value={incomeFormdata?.date}
                                            onChange={handleInputChangeIncome}
                                            required
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                                onClick={handleCloseModalIncome}>Yopish
                                        </button>
                                        <button type="submit" className="btn btn-primary">Saqlash</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllIncome;
