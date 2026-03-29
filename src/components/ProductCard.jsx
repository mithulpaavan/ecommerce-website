import React from 'react'

import { Link } from 'react-router-dom'

function ProductCard({product}) {
  return (
     <div className="product-card" key={product.id}>
            <img src={product.image} alt="product_image" className="image" />
            <div className="card-content">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div>
                <Link className='details'> View Details </Link>
                <button className="btn">Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard