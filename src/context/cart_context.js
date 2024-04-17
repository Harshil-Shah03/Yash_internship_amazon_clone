import { createContext,useReducer,useContext } from "react";
import reducer from "../reducer/cartReducer";
import { useEffect } from "react";

const CartContext = createContext();

const getLocalCartData = () => {
    let newCartData = localStorage.getItem("mycart");
    if (newCartData !== null){
        return JSON.parse(newCartData);
    } 
    else {
        return []; // Return an empty array if no data is found in localStorage
    }
}


const initialState = {
    // cart:[],
    cart: getLocalCartData(),
    total_item:"",
    total_amount:"",
};

const CartProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (title,price,discount) =>{
        dispatch({type:"ADD_TO_CART",payload:{title,price,discount}})
    };
    
    const removeItem = (id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id});
    };

    //clear the cart
    const clearCart = ()=>{
        dispatch({type:"CLEAR_CART"});
    }

    //to add the data in local storage
    useEffect(() => {
        localStorage.setItem("mycart",JSON.stringify(state.cart))
    },[state.cart])

    return (
            <CartContext.Provider value={{...state,addToCart,removeItem,clearCart}}>
                {children}
            </CartContext.Provider>
    );
};




const useCartContext = () =>{
    return useContext(CartContext);

};

export { CartProvider,useCartContext};