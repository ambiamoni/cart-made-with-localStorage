import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    const {img, name, seller, price,rating } = product;
   
    return (
      
            <div className="product">
                <img src={img} alt="" />
            <div className='product-info'>
                <h2 className='product-name'>Name:{name}</h2>
                <p>Price:${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Rating:{rating}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className="btn-cart">
                <p className="textColor">Add To Cart</p>
                
             </button>
            
                
            </div>
    )
    }

export default Product;