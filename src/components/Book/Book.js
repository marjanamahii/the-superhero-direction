import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Displaybook from '../Displaybook/Displaybook';
import './Book.css';

const Book = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./books.JSON')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    const handleAddToCart = (book) => {
        const newCart = [...cart, book];
        setCart(newCart);
    }
    return (
        <div className="d-flex justify-content-around">
            <div>
                {
                    books.map(book => <Displaybook book={book} handelAddToCart={handleAddToCart}></Displaybook>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>




    );
};

export default Book;