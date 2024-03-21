import React from "react";
import Vector from "../../images/vector.svg"
import CoffeListing from "../CoffeListing/CoffeListing";
import "./CoffeCollection.css"

function CoffeCollection() {
    return (
        <div className="container">
            {/* <div className="container-image-vector"> */}
                <img className="image-vector" src={Vector}/>
            {/* </div>            */}
            <div className="our-collection">
                <h2>Our Collection</h2>
                <p>
                    Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                </p>
                <a href="#" className="all-products">All Products</a>
                <a href="#" className="available-now">Available Now</a>
            </div>
            <CoffeListing/>
        </div>
    );
}

export default CoffeCollection;