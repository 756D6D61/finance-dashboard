import axios from 'axios';

const URL = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=MBJMQUN9JKSARRRI';

const URL2 = '//financialmodelingprep.com/api/forex';

export const EUR_USD = 'EUR_USD';

export const eurUSD = (payload) => {
    return {
        type: EUR_USD,
        payload 
    };
}

export const getData = () =>  {
    return function(dispatch) {
    const url = `${URL}`;
    axios.get(url)
        .then (function (response) {
           dispatch(eurUSD(response.data));
        })
        .catch(function(error) {
            console.log(error);
        })
    }
   }