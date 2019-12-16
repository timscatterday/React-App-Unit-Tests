
const INITIAL_USD_AMOUNT = 10000

// create an action creator that fetches our transactions
// calculate amount that we have

export const user_usd_amount = (transactions) => {
    const amount = transactions.reduce((acc, curr) => {
        return acc + curr.amount_usd;
    }, INITIAL_USD_AMOUNT)
    return amount;
};

/**
 * calculate amount given a ticker
 */

export const user_ticker_amount = (ticker, transactions) => {
    const transactions_with_ticker = transactions.filter((transaction) => {
        if (transaction.asset === ticker){
            return true;
        }
    })

    const amount_of_ticker = transactions_with_ticker.reduce((acc, curr) => {
        return acc + curr.amount;
    }, 0)

    return amount_of_ticker;
};

export const user_ticker_value = (ticker, transactions, current_value) => {
    const ticker_amount = user_ticker_amount(ticker, transactions);

    return Math.round(ticker_amount * current_value)
};

/**
 * Calculates the value of the Users Portfolio
 */

//asset['ticker]['USD'].price

export const fromStringtoDollar = (usd_string) => {
    return parseFloat(usd_string.trim().replace(/\$|,/g, ''));
};

/**
 * Given a set of transactions and the current value for each ticker,
 * calculate the user's portfolio value
 * @param {array} transactions list of all transactions for the user
 * @param {array} current_values [{ticker, USD: {price}}]
 * @return {int} portfolio value 
 */

export const user_portfolio_value = (transactions, current_values) => {
    const tickers = ['BTC', 'ETH', "BCH", "LTC", "EOS"];

    return tickers.reduce((acc, ticker) => {
        const ticker_value = user_ticker_value(ticker, transactions, current_values[ticker]['USD'].price);
        return acc + ticker_value;
    }, 0);
};