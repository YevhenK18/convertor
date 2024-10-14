
const apiKey = 'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11';
const apiUrl = `https://api.exchangerate-api.com/v4/latest/`;


document.getElementById("convertBtn").addEventListener("click", function () {

    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;


    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    
    fetch(`${apiUrl}${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency]; 
            if (rate) {
                const convertedAmount = (amount * rate).toFixed(2);
                document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            } else {
                alert("Could not retrieve the exchange rate for this conversion.");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("There was an error fetching the exchange rates. Please try again later.");
        });
});
