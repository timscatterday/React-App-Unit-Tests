import {
    user_usd_amount,
    user_ticker_quantity,
    user_ticker_usd_value,
    fromStringtoDollar,
    user_portfolio_value
} from './transactions';

const INITIAL_USD_AMOUNT = 10000

const prices = {BTC: {
    USD: {
        price: '$7000.00'
    }
}}

const TRANSACTIONS = [ {
amount: 1,
amount_usd: -12345,
asset: "BTC",
created_at: "2019-12-06T22:24:22.842Z",
id: 2,
price: 7000,
updated_at: "2019-12-06T22:24:22.842Z",
user_id: 1 },
]

const CURRENT_VALUES = 
    {BTC: { USD: { PRICE: "$ 7,000.00" }}}
;

describe('amount_usd', () => {
    test('user_amount', () => expect(user_usd_amount(TRANSACTIONS)).toBe(INITIAL_USD_AMOUNT - 12345))
});

describe('ticker_amount', () => {
    test('user_ticker_quantity', () => expect(user_ticker_quantity('BTC', TRANSACTIONS)).toBe(1))
});

describe('ticker_value', () => {
    test('user_ticker_usd_value', () => expect(user_ticker_usd_value('BTC', TRANSACTIONS, TRANSACTIONS[0].price)).toBe(7000))
});

describe('portfolio_value', () => {
    test('user_portfolio_value', () => expect(user_portfolio_value(TRANSACTIONS, CURRENT_VALUES)).toBe(7000))
});

