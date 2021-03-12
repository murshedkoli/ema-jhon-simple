import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
   
    const { img, name, price, category, features, stock, key } = props.product
    return (
        <div className="single-product-container">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="name-container">
                <h2><Link to={"/product/"+key}>{name}</Link></h2>

                <div className="info-tab">
                    <div className="category-price">
                        <p>Category :<b>{category}</b></p>
                        <h3>Price : ${price}</h3>
                        <p><small>Only {stock} Available in Stock - Order Soon</small></p>
                        { props.showBtn &&
                            <button className="cart-btn" onClick={() => props.handleAddCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                        }
                    </div>

                    <div className="features">
                        <h2>Feature :</h2>
                        <ol>
                            {features.map(feature => <li><span>{feature.description}</span> : <span>{feature.value}</span></li>)}
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;