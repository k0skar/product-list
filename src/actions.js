export const reqProducts = () => ({
    type: 'REQ_PRODUCTS',
});
export const addToCart = (id) => ({
    type: 'ADD_TO_CART',
    id: id
});
export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    id: id
});
