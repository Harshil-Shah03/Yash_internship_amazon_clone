import React from "react";
import { useCartContext } from "../context/cart_context";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CartItem from "../components/cartitem";


export default function Cart(){
    const { cart,clearCart } = useCartContext();
    console.log(cart);
    if (cart.length ===0){
        return(
            <div>
                <h3>No Items Added To The Cart</h3>
                <NavLink to="/">
                <button  className="btn btn-primary" style={{backgroundColor:"black"}}>Back To The Shop</button>
            </NavLink>
            </div>
        )
    }
    return(
        <div>
        <Wrapper>
        <table className="cart-table">
        <thead>
            <tr>
                <th className="cart-item">ITEM</th>
                <th className="cart-price">PRICE</th>
                <th className="cart-quantity">QUANTITY</th>
                <th className="cart-subtotal">SUBTOTAL</th>
                <th className="cart-remove">REMOVE</th>
            </tr>
        </thead>
        <tbody>
            

                {
                    cart.map((ele)=>{
                        return <CartItem key={ele.id} {...ele}/>

                })
                }
               
            
            </tbody>
    </table>
    
    <div className="buttons">
    <NavLink to="/">
                <button  className="btn btn-primary" style={{backgroundColor:"black"}}>Continue Shopping</button>
            </NavLink>
            <button  onClick={clearCart} className="btn btn-primary" style={{backgroundColor:"red"}}>Clear Cart</button>
    </div>
        </Wrapper>
        
            </div>);
}






const Wrapper = styled.section`
  .cart-table {
    width: 100%;
    border-collapse: collapse;
}

.cart-table th,
.cart-table td {
    padding: 10px;
    text-align: left;
}

.cart-table thead {
    background-color: #f2f2f2;
}

.quantity {
    display: flex;
    align-items: center;
}

.quantity button {
    padding: 5px;
    border: none;
}

.subtotal,
.shipping,
.order-total {
    margin-top: 10px;
}

.buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}


`;

