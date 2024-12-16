export const FormatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

export const FormatAmount = (amount) => {
    const positiveAmount = Math.abs(amount);
    const formattedAmount = positiveAmount
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    return formattedAmount;
};