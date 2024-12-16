import React, {createContext, useState, useContext, useEffect} from "react";

const Context = createContext();

export const ContextProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);
    const [showModalIncome, setShowModalIncome] = useState(false);

    const [formData, setFormData] = useState({
        amount: "",
        category: "",
        date: "",
        name: "",
    });
    const [transactions, setTransactions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    // income
    const [incomeData, setIncomeData] = useState([]);
    const [incomeFormdata, setIncomeFormdata] = useState({
        amount: "",
        date: "",
    });

    const loadTransactions = () => {
        const savedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
        setTransactions(savedTransactions);
        setFilteredTransactions(savedTransactions);

        const uniqueCategories = [...new Set(savedTransactions.map((item) => item.category))];
        setCategories(uniqueCategories);
    };

    useEffect(() => {
        loadTransactions();
        const savedTransactions = JSON.parse(localStorage.getItem("incomes")) || [];
        setIncomeData(savedTransactions);
    }, []);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    // modal set Income
    const handleShowModalIncome = () => setShowModalIncome(true);
    const handleCloseModalIncome = () => setShowModalIncome(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSave = () => {
        const newTransaction = {...formData, id: Date.now()};
        const updatedTransactions = [...transactions, newTransaction];
        localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

        loadTransactions();
        handleCloseModal();
        setFormData({amount: "", category: "", date: "", name: ""});
    };

    const handleCategoryFilter = (category) => {
        if (category === "") {
            setFilteredTransactions(transactions);
        } else {
            const filtered = transactions.filter(
                (transaction) => transaction.category === category
            );
            setFilteredTransactions(filtered);
        }
    };


    // jami daromadlar funksiyalari va malumotlari
    const handleInputChangeIncome = (e) => {
        const {name, value} = e.target;
        setIncomeFormdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSaveIncome = () => {
        const savedIncomes = JSON.parse(localStorage.getItem("incomes")) || [];
        const newIncome = {...incomeFormdata, id: Date.now()};
        savedIncomes.push(newIncome);
        localStorage.setItem("incomes", JSON.stringify(savedIncomes));
        setIncomeData(savedIncomes);
        handleCloseModal();
        setIncomeFormdata({amount: "", date: ""});
        handleCloseModalIncome()
    };

    return (
        <Context.Provider
            value={{
                showModal,
                handleShowModal,
                handleCloseModal,
                formData,
                handleInputChange,
                handleSave,
                transactions,
                categories,
                handleCategoryFilter,
                filteredTransactions,
                incomeData,
                handleSaveIncome,
                handleInputChangeIncome,
                incomeFormdata,
                showModalIncome,
                handleShowModalIncome,
                handleCloseModalIncome
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useBalance = () => useContext(Context);
