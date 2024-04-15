import React,{useState, useEffect} from "react"
import axios from "axios"
import {useParams} from "react-router-dom"
import Header from "../components/header"
import Carousel from "../components/Carousel"
import Desc_deets from "../components/description_details"





export default function DD(){
    const params = useParams()
    const link = "https://dummyjson.com/products"
    const [posts,setPost] = useState({images:[]})
    useEffect(()=>{
        const fetchPosts =  ()=>{
            axios.get(link)
            .then(response =>{console.log(response.data.products[params.id])
            setPost(response.data.products[params.id])})
            
            

        }
        fetchPosts()
        },[])

    console.log(posts.title)
    return(
        <div>
        
        <Carousel list={posts.images}/>
        <Desc_deets title={posts.title} 
                    desc={posts.description} 
                    discount={posts.discountPercentage} 
                    rat={posts.rating}
                    stk={posts.stock}
                    brd={posts.brand} 
                    cat={posts.category}
                    price ={posts.price}                    
                    />
        
        </div>
    )
}