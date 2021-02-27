import React from 'react';
import './Product.css'

const Product = (props) => {
    const product = props.product
    return (
        <div className="single-product-container">
                <div className="image-container">
                <img src={product.img} alt=""/>
                </div>
               <div className="name-container">
               <h2>{product.name}</h2>

              <div className="info-tab">
              <div className="category-price">
               <p>Category :<b>{product.category}</b></p>
                <h3>Price : ${product.price}</h3>
               </div>
                
                <div className="features">
                <h2>Feature :</h2>
                <ol>
                { product.features.map(feature => <li><span>{feature.description}</span> : <span>{feature.value}</span></li>)}
                </ol>
                </div>
              </div>
                
               </div>
        </div>
    );
};

export default Product;