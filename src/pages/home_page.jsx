import React, { useEffect, useState } from "react"
import axios from "axios"
import "../index.css"
import Card from "../components/card"
import Header from "../components/header"

export default function Home_Page(){

    const link = "https://dummyjson.com/products"
    const[posts,setPost]= useState([])
    useEffect(() => {
        const fetchPosts = ()=>{
            axios.get(link)
            .then(response => {console.log(response.data.products)
            setPost(response.data.products)})
        }
        fetchPosts()
    },[])
    

    


    return(
        <div>
            <Header heading="Harshil's Shop" description="Welcome, This is the place where you can buy anything and everything"/>         
            <div className="grid-container">
                    {posts.map((post,index)=>{
                        
                        return (
                                <Card   
                                    key={index} 
                                    title={post.title} 
                                    img={post.thumbnail}
                                    desc={post.description}
                                    id = {post.id}
                                />
                            )
                        }
                    )
                }            
            </div>
        </div>
        
    )
}