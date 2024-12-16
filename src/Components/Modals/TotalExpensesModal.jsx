import {FormatAmount} from "../../helper/Formats.js";
import React from "react";
import {useBalance} from "../../context/Context.jsx";
import {CSSTransition} from "react-transition-group";

export const TotalExpenses = () => {
    const {
        showModal,
        handleShowModal,
        handleCloseModal,
        formData,
        handleInputChange,
        handleSave,
        transactions
    } = useBalance();
    return (
        <>
            <div className="col-md-4">
                <div className="card border-light shadow mb-3" style={{height: "100%"}}>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">Jami Harajatlar</h5>
                        <p className="fs-4"> {FormatAmount(transactions.reduce((a, b) => a + +b.amount, 0))} so'm </p>
                        <button className="btn btn-primary w-100" onClick={handleShowModal}>
                            Chiqimlar
                        </button>
                    </div>
                </div>
            </div>
            <CSSTransition in={showModal} classNames="modal-fade" unmountOnExit timeout={1}>
                <div className="modal show d-block bg-opacity-50 bg-black"
                     onClick={handleCloseModal}>
                    >
                    <form className="modal-dialog"
                          onSubmit={handleSave}
                          onClick={event => event.stopPropagation()}>
                        >
                        <div className="modal-content">
                            <div className="modal-header d-flex align-items-center justify-content-between">
                                <h5 className="modal-title">Chiqim Kiritish</h5>
                                <button
                                    className="closebtn bg-danger rounded-5 border-0 p-2 text-white position-absolute"
                                    onClick={handleCloseModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    placeholder="Miqdor"
                                    className="form-control mb-3"
                                    required
                                />
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    placeholder="Kategoriya"
                                    className="form-control mb-3"
                                    required
                                />
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    className="form-control mb-3"
                                    required
                                />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Nom"
                                    className="form-control mb-3"
                                    required
                                />
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={handleCloseModal}>
                                    Yopish
                                </button>
                                <button className="btn btn-primary" type={'submit'}>
                                    Saqlash
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </CSSTransition>
        </>
    )
}