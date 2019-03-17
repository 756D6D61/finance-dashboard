
export default(state = {}, action) => {
    switch(action.type) {
        case 'SECTOR':
            return {
                ...state, 
                data: action.payload
            }
        default: 
            return state
    }
}