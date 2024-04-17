// 
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'

const CartItem = (props) => {
    const { removeItem } = useCartContext();
    const dis_p = (props.price - (props.price * (props.discount / 100))).toFixed(2);
    const [count, setCount] = useState(1);
    const subtotal = (dis_p * count).toFixed(2);

    return (
        <tr>
            <td className="cart-item-name">{props.name}</td>
            <td className="cart-item-price">Rs{dis_p}</td>
            <td className="cart-item-quantity">
                <span className="quantity">
                    <button onClick={() => (count === 1 ? setCount(count) : setCount(count - 1))}>-</button>
                    <p>{count}</p>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </span>
            </td>
            <td className="cart-item-subtotal">Rs{subtotal}</td>
            <td className="cart-item-remove"><FaTrash onClick={() => removeItem(props.name)} /></td>
        </tr>
    );
};

export default CartItem;
