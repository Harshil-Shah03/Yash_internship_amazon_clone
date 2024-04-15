import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

export default function Desc_deets(props){
    const {addToCart} = useCartContext();
    return(
    
    
    
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
    
    <div className="container-fluid py-5">
      <h1 className="display-5 fw-bold">{props.title}</h1>
      <p className="col-md-8 fs-4">Description: {props.desc}</p>
      <p className="col-md-8 fs-4">Price: ${props.price}</p>
      <p className="col-md-8 fs-4">Discount Percentage: {props.discount}</p>
      <p className="col-md-8 fs-4">Rating: {props.rat}</p>
      <p className="col-md-8 fs-4">Stock: {props.stk}</p>
      <p className="col-md-8 fs-4">Brand: {props.brd}</p>
      <p className="col-md-8 fs-4">Category: {props.cat}</p>
      <NavLink to="/cart" onClick={() => addToCart(props.title,props.price,props.discount)}>
        <button  className="btn btn-primary btn-lg" >Add to Cart</button>
      </NavLink>
      <br/>
      <br/>
      <br/>
      <a href="/" className="btn btn-primary" style={{backgroundColor:"black"}}>Go Back</a>
    </div>
  </div>)

}