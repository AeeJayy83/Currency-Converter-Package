const { convertCurrency } = require("currency-converter-package-local")

convertCurrency(1, "USD", "INR").then((res) => console.log(res));