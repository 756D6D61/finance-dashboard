export default(state = {}, action) => {
    switch(action.type) {
        case 'STOCK':
            return {
                ...state, 
                newStock: action.payload
            }
        default: 
            return state
    }
}