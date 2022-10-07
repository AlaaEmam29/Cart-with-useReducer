import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../redux/store.js"

const AppContext = createContext();
const AppProvider = ({ children }) => {
    const initialState = {
        cart: [],
        total: 0,
        amount: 0,
        loading: false,
        error: null,
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }
    const fetchData = async () => {
        try {
            dispatch({ type: 'LOADING' });
            const response = await fetch('https://course-api.com/react-useReducer-cart-project');
            const cart = await response.json();
            dispatch({ type: 'DISPLAY_ITEMS', payload: cart });


        }
        catch (error) {
            dispatch({ type: 'ERROR', payload: error });
            console.log(error);
        }
    }
    const removeSingleItem = (id) => {
        dispatch({ type: 'REMOVE', payload: id });
    }
    const increaseAmount = (id) => {
        dispatch({ type: 'INCREASE', payload: id });
    }
    const decreaseAmount = (id) => {
        dispatch({ type: 'DECREASE', payload: id });
    }
    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' });
    }, [state.cart]);
    useEffect(() => { 
        fetchData();
    },[]);
    return <AppContext.Provider value={{

        ...state, clearCart, removeSingleItem, increaseAmount, decreaseAmount

    }}>{children}</AppContext.Provider>;
};
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppProvider, useGlobalContext };