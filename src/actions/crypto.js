import axios from 'axios';

const URL = 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=CNY&apikey=MBJMQUN9JKSARRRI';

export const BTC_USD = 'EUR_USD';

export const btcUSD = (payload) => {
    return {
        type: BTC_USD,
        payload 
    };
}

export const getCryptoData = () =>  {
    return function(dispatch) {
    const url = `${URL}`;
    axios.get(url)
        .then (function (response) {
           dispatch(btcUSD(response.data));
        })
        .catch(function(error) {
            console.log(error);
        })
    }
   }