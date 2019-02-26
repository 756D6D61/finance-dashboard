export default(state = {}, action) => {
    switch(action.type) {
        case 'BTC_USD':
            return {
                ...state, 
                btc: action.payload
            }
        default: 
            return state
    }
}