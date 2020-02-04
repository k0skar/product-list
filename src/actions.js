export const reqProducts = () => ({
    type: 'REQ_PRODUCTS',
});
export const addOneToCart = (id) => ({
    type: 'ADD_ONE_TO_CART',
    id: id
});
export const removeOneFromCart = (id) => ({
    type: 'ADD_ONE_TO_CART',
    id: id
});
export const removeItemFromCart = (id) => ({
    type: 'REMOVE_ITEM_FROM_CART',
    id: id
});
