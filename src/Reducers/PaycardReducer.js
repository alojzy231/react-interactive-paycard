const initialState = {
    cardNumber : null,
    cardName : '',
    expirationDate : null,
    CVV : null
}

const paycardReducer = (state = initialState, action) => {
    switch(action.type){
        case 'paycard/changeCardNumber':
            return {
                ...state, 
                cardNumber : action.payload
            }
        case 'paycard/changeCardName':
            return {
                ...state,
                cardName : action.payload
            }
        case 'paycard/changeExpirationDate':
            return {
                ...state,
                expirationDate : action.payload
            }
        case 'paycard/changeCVV':
            return {
                ...state,
                CVV : action.payload
            }
        default:
            return state
    }
}

export default paycardReducer;