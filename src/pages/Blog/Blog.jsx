import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { CardProduct } from '../../components/CardProduct';
import { useState, useEffect } from "react";


const Blog = () =>{
    useEffect(() => {
        document.title = "Blogs"
      }, [])
    return(
        <>
    <Navbar />
    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Blogs</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Wheat"
          detail="Premium  Wheat Supplier High-Quality Wheat for Pasta and Bread Production"
          img="./product/Wheat.jpg"
          location="/wheat"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Barley"
        detail="Discover Premium Barley Products | Your Trusted Global Barley Supplier "
        img="./product/Barley.jpg"
        location="/barley"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Oats"
        detail={<span>Top Supplier of Premium Oats <br /> Leading Global Producer </span> }
        img="./product/Oats.jpg"
        location="/oats"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Millet"
        detail={<span>Premier Supplier of High-Quality Red and Yellow Millet</span> }
        img="./product/Millet.jpg"
        location="/millet"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
    
 {/*************************************** Productions ****************************************/}
    {/********************************************  ********************************************/}

    </>
    );
}

export default Blog;