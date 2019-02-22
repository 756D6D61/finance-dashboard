
export default(state = {}, action) => {
    switch(action.type) {
        case 'EUR_USD':
            return {
                ...state, 
                result: action.payload
            }
        default: 
            return state
    }
}