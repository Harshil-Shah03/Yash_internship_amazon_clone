import React from "react"
import "../index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home_Page from "../pages/home_page";
import NotFound from "../pages/NotFound";
import { NavLink } from "react-router-dom";



export default function Card(props){
    return(

                // <div className="card" style={{width: "18rem"}}>
                //     <img src={props.img} className="card-img-top sizer" alt={props.title}/>
                //     <div className="card-body">
                //     <h5 className="card-title">{props.title}</h5>
                //     <p className="card-text">{props.desc}</p>
                //     <NavLink to={`/productdesc/${props.id-1}`}>
                //     <button className="btn btn-primary" style={{backgroundColor:"black"}}>Details</button>
                //     </NavLink>
                //     </div>
                // </div>
                
                  <div class="card shadow-sm">
                    <img src={props.img} className="card-img-top sizer" alt={props.title}/>
        
                    <div class="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        <NavLink to={`/productdesc/${props.id-1}`}>
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                         </NavLink>     
                          
                        </div>
                        <small class="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                
            
    );
}