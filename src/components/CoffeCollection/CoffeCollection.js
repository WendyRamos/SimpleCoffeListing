import React, { useState } from "react";
import Vector from "../../images/vector.svg"
import CoffeListing from "../CoffeListing/CoffeListing";
import "./CoffeCollection.css"

function CoffeCollection() {
    const [clicked, setClicked] = useState(false);
    const handleClick = (state) => {
        setClicked(state);
    }
    return (
        <div className="container">
            <img className="image-vector" src={Vector} alt="vector"/>
            <div className="our-collection">
                <h2>Our Collection</h2>
                <p>
                    Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                </p>
                <button className="all-products" onClick={() => handleClick(false)}>All Products</button>
                <button className="available-now" onClick={() => handleClick(true)}>Available Now</button>
            </div>
            <CoffeListing showed={clicked}/>
        </div>
    );
}

export default CoffeCollection;