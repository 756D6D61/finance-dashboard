import axios from 'axios';

const URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=MBJMQUN9JKSARRRI';

export const STOCK = 'STOCK';

export const stock = (payload) => {
    return {
        type: STOCK,
        payload 
    };
}

export const getDataStock = () =>  {
    return function(dispatch) {
    const url = `${URL}`;
    axios.get(url)
        .then (function (response) {
           dispatch(stock(response.data));
        })
        .catch(function(error) {
            console.log(error);
        })
    }
   }