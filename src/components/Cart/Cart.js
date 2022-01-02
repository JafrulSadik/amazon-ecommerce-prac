import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce( (total,prd) => total+prd.price ,0);
    
    let shipping = 0;

    if (total === 0){
        shipping = 0;
    }
    else if(total>100){
        shipping = 35;
    }
    else if(total<20){
        shipping = 4.99;
    }
    else{
        shipping= 12.99;
    }

    const tax = (total/10);

    const grandTotal = total+ shipping + tax;

    

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered:{cart.length}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p><small>Tax + VAT: {tax.toFixed(2)}</small></p>
            <p>Total Price: {parseFloat(grandTotal.toFixed(2))}</p>
        </div>
    );
};

export default Cart;