import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { CardProduct } from '../../components/CardProduct';

const Products = () =>{
    return(
        <>
    <Navbar />
    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Grains</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Wheat"
          detail="Premium  Wheat Supplier High-Quality Wheat for Pasta and Bread Production"
          img="./images/wheats.png"
          location="/wheat"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Barley"
        detail="Discover Premium Barley Products | Your Trusted Global Barley Supplier "
        img="./product/barley.png"
        location="/barley"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Oats"
        detail={<span>Top Supplier of Premium Oats <br /> Leading Global Producer </span> }
        img="./product/oats.webp"
        location="/oats"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Millet"
        detail={<span>Premier Supplier of High-Quality Red and Yellow Millet</span> }
        img="./product/millet.webp"
        location="/millet"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
    {/**************************************** Lentails ****************************************/}
    {/********************************************  ********************************************/}

    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Lentils</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Green lentils"
          detail="Premier Supplier of High-Quality Green Lentils"
          img="./product/green-lentils.webp"
          location="/wheat"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Red lentils"
        detail="Top Quality Red Lentils Supplier | Premium Lentils for Global Markets"
        img="./product/red-lentils.webp"
        location="/barley"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Chickpea"
        detail={<span>Top Quality Chickpea Supplier | Exporter of High-Grade Chickpeas</span> }
        img="./product/checkpeas.png"
        location="/oats"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Yellow Peas"
        detail={<span>Finest Yellow Peas Supplier – Whole and Split</span> }
        img="./product/yellowpeas.webp"
        location="/millet"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
     {/*************************************** Seeds ****************************************/}
    {/********************************************  ********************************************/}

    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Seeds</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Flaxseeds"
          detail="Trusted Non-GMO Flaxseed Supplier – High-Quality and Sustainable Seeds"
          img="./product/flaxseeds.webp"
          location="/flaxseeds"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Rapeseeds"
        detail="Premium Rapeseeds Supplier – Pure & Non-GMO"
        img="./product/rapeseed.webp"
        location="/rapeseeds"
        />
        </div><div className='m-4'>
        <CardProduct
        title="sunflower Seeds"
        detail={<span>Premium Sunflower Seeds – Versatility and Excellence in Every Seed</span> }
        img="./product/Sunflower.png"
        location="/sunflowerseed"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Coriander Seeds"
        detail={<span>Premium Coriander Seeds Supplier – Aromatic Excellence</span> }
        img="./product/coriander Seed.png"
        location="/corianderseed"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
  {/*************************************** Meals (Animal Feeds) ****************************************/}
    {/********************************************  ********************************************/}

    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Meals (Animal Feeds)</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Sunflower Meal"
          detail="Sunflower Meal for Animal Feed. Premium Sunflower Meal"
          img="./product/sunflower-meal.jpg"
          location="/sunflower-meal"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Flaxseed Meal"
        detail="Flaxseed Meal – Non-GMO Flaxseed Meal Supplier"
        img="./product/Flaxseed.png"
        location="/flaxseed-meal"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Rapeseed Meal"
        detail={<span>Rapeseed Meal Supplier & Bulk Rapeseed Meal for Animal Feed</span> }
        img="./product/Rapseeds Meal.png"
        location="/rapeseed-meal"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Soybean Meal"
        detail={<span>Trusted Soybean Meal Supplier & Premium High-Protein Soya Meal...</span> }
        img="./product/Soya Meal.png"
        location="/soya-meal-supplier"
        />
        </div>
        
        <br /><br />
    </div>
    </div>

 {/*************************************** Productions ****************************************/}
    {/********************************************  ********************************************/}

    <div className='grain-container'>
    <div className='grain-header'>
            <h1>Productions</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Flour"
          detail="Trusted wheat Flour Supplier & Leading Wholesale Flour Distributor"
          img="./product/Flour.png"
          location="/flour"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Sunflower Oil"
        detail="Top-Quality Sunflower Products – Refined and Unrefined Sunflower Oil"
        img="./product/sunflower-oil.png"
        location="/sunflower-oil"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Flaxseed Oil"
        detail={<span>Pure and Nutritious Flaxseed Oil – Ethically Sourced for Health </span> }
        img="./product/Flaxseed Oil.png"
        location="/flaxseed-oil"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Rapeseed Oil"
        detail={<span>Premium Rapeseed Oil – Sustainably Sourced and Rich in Health Benefits</span> }
        img="./product/Rapeseed Meal.png"
        location="/rapeseeds-oil"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
{/*************************************** petrochemical products ****************************************/}
    {/********************************************  ********************************************/}

    <div className='grain-container'>
    <div className='grain-header'>
            <h1>petrochemical products</h1>
        </div>
    <div className='grains'>
        
    <div className='m-4'>
        <CardProduct
         title="Ethylene"
          detail="Premier Ethylene Solutions – Advancing Industrial Excellence"
          img="./product/Ethylene.png"
          location="/ethylene-solution"
          />
        </div><div className='m-4'>
        <CardProduct
        title="Propylene"
        detail="Premier Propylene Solutions – Leading the Way in Industrial Innovation"
        img="./product/Propylene.png"
        location="/propylene-supplier"
        />
        </div><div className='m-4'>
        <CardProduct
        title="Polyethylene"
        detail={<span>Premier Polyethylene Solutions – Pioneering Excellence... </span> }
        img="./product/Polyethylene.png"
        location="/polyethylene"
        />
        </div>
        
        <br /><br />
    </div>
    </div>
    </>
    );
}

export default Products;