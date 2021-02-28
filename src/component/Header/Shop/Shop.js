import React, { useState } from 'react';
import fakeData from '../../../fakeData'
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './shop.css'

const Shop = () => {
    const first15 = fakeData.slice(0, 15);

    const [products, setProducts] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddCart = (product)=>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(product => <Product product={product} handleAddCart={handleAddCart}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;