const store = (state, action) => {
    switch (action.type) {
        case 'CLEAR_CART':
            return { ...state, cart: [] };
        case 'REMOVE':
            return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) };
        case 'DISPLAY_ITEMS':
            return { ...state, cart: action.payload, loading: false ,error:null};
        case 'LOADING':
            return { ...state, loading: true };
        case 'ERROR':
            console.log(action.payload);
            return { ...state, error: action.payload, loading: false };
        case 'INCREASE':
            let tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount + 1 };
                }
                return cartItem;
            });
            return { ...state, cart: tempCart };
        case 'DECREASE':
            let tempCart2 = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount - 1 };
                }
                return cartItem;
            }).filter((cartItem) => cartItem.amount !== 0);
            return { ...state, cart: tempCart2 };
        case 'GET_TOTALS':
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;
                cartTotal.total += itemTotal;
                cartTotal.amount += amount;
                return cartTotal;
            }, { total: 0, amount: 0 });
            total = parseFloat(total.toFixed(2));
            return { ...state, total, amount };
        
        default:
            throw new Error(`No Matching "${action.type}" - action type`);

    }
}
export default store;