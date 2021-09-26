import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBook } from '@fortawesome/free-solid-svg-icons';
import './Displaybook.css';

const Displaybook = (props) => {
    console.log(props.book);
    const { name, img, price, publish_year, publisher, author } = props.book;
    // console.log(props.handelAddToCart);
    return (
        <div className="book">
            <div className="row row-cols-1 row-cols-md-3 g-4 m-2 ">
                <div className="card h-100">
                    <img src={img} alt="" />
                    <div className="card-body">
                        <h4>Name: {name}</h4>
                        <p><small>Author: {author}</small></p>
                        <p>Publisher: {publisher}</p>
                        <p>Publish Year: {publish_year}</p>
                        <p>Price: {price}</p>
                        <button onClick={() => props.handelAddToCart(props.book)} className="bg-warning border-warning"><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button><br />
                        <i><FontAwesomeIcon icon={faBook} /></i>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Displaybook;