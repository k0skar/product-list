const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'RES_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        case 'ADD_ONE_TO_CART':
            const newState = { ...state };
            const id = action.id
            newState.cart[id] ? newState.cart[id]++ : newState.cart[id] = 1;

            return {
                ...newState,
            }
        case 'REMOVE_ONE_FROM_CART':
            const newerState = { ...state };
            let countItem = newerState.cart[action.id];

            if (countItem) {
                newerState.cart[action.id]--;
                if (countItem < 1) {
                    delete newerState.cart[action.id];
                }
            }

            return {
                ...newerState,
            }
        case 'REMOVE_ITEM_FROM_CART':
            
            const newestState = { ...state };
            const count = state.cart[action.id];

            if (count) {
                delete newestState.cart[action.id];
            }
            
            return {
                ...newestState,
            }

        default:
            return state;
    }
};

export default reducer;
