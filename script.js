//script.js - currency-converter
const rates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    PKR: 280
}

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const result = document.getElementById('result');

    if(isNaN(amount) || amount <= 0) {
        result.innerText = "Please enter a valid amount";
        return;
    }

    let amountInUSD = amount / rates[fromCurrency];
    let convertedAmount = amountInUSD * rates[toCurrency];

    result.innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}