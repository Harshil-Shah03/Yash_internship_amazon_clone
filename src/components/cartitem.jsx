import React,{ useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'


const CartItem = (props) => {
    const {removeItem} = useCartContext();
    let [count,setCount] = useState(1);
    const dis_p = (props.price-(props.price*(props.discount/100))).toFixed(2)
    let [total,setTotal] = useState(0);
    return (
        <tr>
        <td className="cart-item-name">{props.name}</td>
        <td className="cart-item-price">Rs{dis_p}</td>
        <td className="cart-item-quantity">
            
            
            <span className="quantity">
                <button onClick={() => (count==1 ?setCount(count):setCount(count--))}>-</button>
                <p>{count}</p>
                <button onClick={() => (setCount(count++))}>+</button>
            </span>


        </td>
        <td className="cart-item-subtotal">Rs{(dis_p*count).toFixed(2)}</td>
        <td className="cart-item-remove"><FaTrash onClick={() => removeItem(props.name)}/></td>
        </tr>
    )
    }

export default CartItem