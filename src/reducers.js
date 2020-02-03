const reducer = (state = {}, action) => {
    console.log('action', action)
    
    switch (action.type) {
        case 'REQ_PRODUCTS':
            return { ...state, loading: true };
        case 'RES_PRODUCTS':
            return {                
                ...state, products:
                    action.products, loading: false
            }
        default:
            return state;
    }
}


export default reducer;