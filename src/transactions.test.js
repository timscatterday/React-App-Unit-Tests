import {
    user_usd_amount,
    user_ticker_amount,
    user_ticker_value,
    fromStringtoDollar,
    user_portfolio_value
} from './transactions';

const INITIAL_USD_AMOUNT = 10000

const prices = {BTC: {
    USD: {
        price: '$7000.00'
    }
}}

const transactions = [ {
amount: 1,
amount_usd: -12345,
asset: "BTC",
created_at: "2019-12-06T22:24:22.842Z",
id: 2,
price: 7000,
updated_at: "2019-12-06T22:24:22.842Z",
user_id: 1 },
]

describe('amount_usd', () => {
    test('user_amount', () => expect(user_usd_amount(transactions)).toBe(INITIAL_USD_AMOUNT - 12345))
});

describe('ticker_amount', () => {
    test('user_ticker_amount', () => expect(user_ticker_amount('BTC', transactions)).toBe(1))
});

describe('ticker_value', () => {
    test('user_ticker_value', () => expect(user_ticker_amount('BTC', transactions)).toBe(1))
});

