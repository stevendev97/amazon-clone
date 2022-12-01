import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";

export default function Product({id, title, image, price, rating}) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        console.log('ji')
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product" >
            <div className="product__info" >
            <p>{title}</p>
                <p className="product__price" >
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating" >
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={id + i}>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}