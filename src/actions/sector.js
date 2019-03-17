import axios from 'axios';

const URL = 'https://www.alphavantage.co/query?function=SECTOR&apikey=MBJMQUN9JKSARRRI';

export const SECTOR = 'SECTOR';

export const sector = (payload) => {
    return {
        type: SECTOR,
        payload 
    };
}

export const getDataSector = () =>  {
    return function(dispatch) {
    const url = `${URL}`;
    axios.get(url)
        .then (function (response) {
           dispatch(sector(response.data));
        })
        .catch(function(error) {
            console.log(error);
        })
    }
   }