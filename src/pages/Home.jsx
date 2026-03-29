import React from 'react'
import { getProducts } from '../data/product'

import { Link } from 'react-router-dom';


import ProductCard from '../components/ProductCard.jsx';

function Home() {
    const products = getProducts();
  return (
    <div className='homepage'>
         <div className="home-hero">
            <h1 className='home-title'>Welcome to Shopy</h1>
            <p className='subtitle'> quality and cheaper products at one place </p>
         </div>

         <div className="container">
                <h2 className="page-title">
                    Our Products
                </h2>
                <div className="products-grid">
                    {products.map((product) => (
                       <ProductCard product={product}/>
                    ))}
                </div>
         </div>
    </div>
  )
}

export default Home