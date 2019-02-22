const initialState = {}

export default(state = initialState, action) => {
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