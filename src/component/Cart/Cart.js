import React from 'react';

const Cart = (props) => {
    console.log(props)
    // let total = 0;
    // for (let i = 0; i < props.cart.length; i++) {
    //     const cartItem = props.cart[i];
    //     total = total+cartItem.price;
    // }

    const cart = props.cart;
    const total = cart.reduce((total, element) => total + element.price , 0);
let shipping = 0;
    if(total>50){
        shipping = 0;
    }
    else if(total > 20){
        shipping = 10;
    }

    else if(total > 0) {
        shipping = 20;
    }

    const beforTax = total+shipping;
    return (
        <div>
            <h2>this is cart</h2>
                <h3>Item Ordered : {props.cart.length}</h3>
                <p>Items : { lumsum(total)}</p>
                <p>Shiping and Handling :{ shipping}</p>
                <p>Total Before Tax: { lumsum(beforTax)}</p>
                <p> VAT + Tax: { lumsum(beforTax/100*10)}</p>
                <h4>Total:{ lumsum(beforTax+beforTax/100*10)}</h4>
        </div>
    );
};

const lumsum = number =>{
    // const number2 = Math.ceil(number);
    const number2 = number.toFixed(2);
    return Number (number2)
}

export default Cart;