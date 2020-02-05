const defaultState = {
    cart: {},
    products: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'RES_PRODUCTS':
            return {
                ...state,
                products: action.products
            }
        case 'ADD_ONE_TO_CART':
            let count = state.cart[action.id];

            !(state.cart.hasOwnProperty(action.id)) && (count = 0);

            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.id]: ++count
                }
            }

        case 'REMOVE_ONE_FROM_CART': {

            if (!state.cart.hasOwnProperty(action.id)) {
                return { ...{}, ...state }
            }

            let count = state.cart[action.id];
            if (count <= 1) {
                return state
            }

            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.id]: count && --count
                }
            }
        }

        case 'REMOVE_ITEM_FROM_CART': {
            const newState = {
                ...state,
                cart: {
                    ...state.cart,
                }
            };

            delete newState.cart[action.id];

            return newState
        }



        default:
            return state;
    }
};

export default reducer;
