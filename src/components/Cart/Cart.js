import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const book of cart) {
        total = total + book.price;
    }
    return (
        <div className="mt-4">
            <h3>Books Added : {props.cart.length}</h3>
            <h3>Total Cost : {total} $</h3>
            <button className="btn-buy bg-warning border-warning">Order now</button>
        </div>
    );
};

export default Cart;