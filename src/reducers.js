const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'RES_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        case 'ADD_TO_CART':
            const newState = { ...state };
            const id = action.id
            newState.cart[id] ? newState.cart[id]++ : newState.cart[id] = 1;

            return {
                ...newState,
            }
        case 'REMOVE_FROM_CART':
            const newerState = { ...state };
            const cartItem = newerState[action.cartItem];

            cartItem && cartItem.count--;

            if (cartItem) {
                cartItem.count--
                if (cartItem.count < 1) {
                    delete newerState[action.cartItem]
                }
            }

            return {
                ...newerState,
            }

        default:
            return state;
    }
};

export default reducer;
