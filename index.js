#!/usr/bin/env node
const axios = require("axios");

async function convertCurrency(amount, fromCurrency , toCurrency) {
    try {
        const url = `https://open.er-api.com/v6/latest/${fromCurrency}`;
        const response = await axios.get(url);
        const rate = response.data.rates[toCurrency];

        if(!rate) {
            throw new Error(`Unable to get exchange rate for ${fromCurrency} to ${toCurrency}`);
        }

        const convertedAmount = rate * amount;
        return convertedAmount
    } catch (error) {
        console.error("Error converting currency:", error.message)
    }
}

module.exports = { convertCurrency };