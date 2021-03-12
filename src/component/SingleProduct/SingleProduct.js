import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const SingleProduct = () => {
    let {key} = useParams();
    const product = fakeData.find(product => product.key === key);
    return (
        <div>
            <h3>{product.name}This Is Single Product Page</h3>
            <Product showBtn={false} product={product}></Product>
        </div>
    );
};

export default SingleProduct;