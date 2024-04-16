import React, { useEffect, useState } from "react"
import axios from "axios"
import "../index.css"
import Card from "../components/card"
import Header from "../components/header"

export default function Home_Page(){

    const link = "https://dummyjson.com/products"
    const[posts,setPost]= useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        const fetchPosts = ()=>{
            axios.get(link)
            .then(response => {console.log(response.data.products)
            setPost(response.data.products)})
        }
        fetchPosts()
    },[])
    const filterPostsByCategory = (category) => {
        setSelectedCategory(category);
      };
    

    


    return(
        // <div>
        //     <Header heading="Harshil's Shop" description="Welcome, This is the place where you can buy anything and everything"/>         
        //     <div className="grid-container">
        //             {posts.map((post,index)=>{
                        
        //                 return (
        //                         <Card   
        //                             key={index} 
        //                             title={post.title} 
        //                             img={post.thumbnail}
        //                             desc={post.description}
        //                             id = {post.id}
        //                         />
        //                     )
        //                 }
        //             )
        //         }            
        //     </div>
        // </div>
        <main>
           <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Harshil's Shop</h1>
                <p className="lead text-muted">"Welcome, This is the place where you can buy anything and everything"</p>
                <p>
                    <button onClick={() => filterPostsByCategory("home-decoration")} className={`btn ${selectedCategory ===  "home-decoration" ? 'btn-primary' : 'btn-secondary'} my-2`}>Home Decoration</button>
                    <button onClick={() => filterPostsByCategory('smartphones')} className={`btn ${selectedCategory === 'smartphones' ? 'btn-primary' : 'btn-secondary'} my-2`}>Smartphones</button>
                    <button onClick={() => filterPostsByCategory('laptops')} className={`btn ${selectedCategory === 'laptops' ? 'btn-primary' : 'btn-secondary'} my-2`}>Laptops</button>
                    <button onClick={() => filterPostsByCategory( "fragrances")} className={`btn ${selectedCategory ===  "fragrances" ? 'btn-primary' : 'btn-secondary'} my-2`}> Fragrances</button>
                    <button onClick={() => filterPostsByCategory("skincare")} className={`btn ${selectedCategory === "skincare" ? 'btn-primary' : 'btn-secondary'} my-2`}>Skincare</button>
                    <button onClick={() => filterPostsByCategory( "groceries")} className={`btn ${selectedCategory ===  "groceries" ? 'btn-primary' : 'btn-secondary'} my-2`}>Groceries</button>
                    <button onClick={() => filterPostsByCategory(null)} className={`btn ${selectedCategory === null ? 'btn-primary' : 'btn-secondary'} my-2`}>All</button>
                </p>
        
              </div>
            </div>
          </section>


  {/* <div class="album py-5 bg-light">
    <div class="container">
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
  </div> */}
  {/* <div class="album py-5 bg-light">
    <div class="container">
        <div class="row row-cols-3 g-3">
            {posts.map((post, index) => (
                <div class="col" key={index}>
                    <div style={{ width: "300px" }}> 
                        <Card   
                            title={post.title} 
                            img={post.thumbnail}
                            desc={post.description}
                            id={post.id}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
</div> */}
<div class="album py-5 bg-light">
    <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {posts.filter(post=> selectedCategory===null|| post.category===selectedCategory)
    
    .map((post,index)=>{
                                                             
            return (
                
                <div class="col">
                        <Card   
                            key={index} 
                            title={post.title} 
                            img={post.thumbnail}
                            desc={post.description}
                            id = {post.id}
                        />
                        </div>
               
                    )
                    }
                    )
                    }         
                    </div>   

     
    </div>
  </div>


</main>
        
    )
}