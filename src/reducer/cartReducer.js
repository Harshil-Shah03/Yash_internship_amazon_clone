

const cartReducer =(state,action) => {
    
    
    if(action.type === "ADD_TO_CART"){
        let {title,price,discount} = action.payload;
        // console.log(title,price,discount);
        let cartProduct;
        cartProduct={
            id: title,
            name:title,
            price,
            discount,

        };
    


        return{
            ...state,
            cart: [...state.cart, cartProduct],
        }
    }
    if(action.type === "REMOVE_ITEM"){
        let updatedCart = state.cart.filter((ele) => ele.id !== action.payload);
        return{
            ...state,
            cart:updatedCart,
        };

    };
    
    if(action.type === "CLEAR_CART"){
        return{
            ...state,
            cart:[],
        }
    }
    return state;
    
};

export default cartReducer;