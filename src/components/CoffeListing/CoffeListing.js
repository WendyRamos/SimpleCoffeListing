import React from "react";
import { useApiServices } from "../../services/useApiServices";
import Start from "../../images/Star.svg";
import StartFill from "../../images/Star_fill.svg";

import "./CoffeListing.css";

function CoffeListing() {
  const { data } = useApiServices();
  console.log(data);
  return (
    <div className="container-coffe-listing">
      {data?.map((coffe) => (
        <div className="card-coffe" key={coffe.id}>
          <div className="container-imagen">
            <img className="coffe-image" src={coffe.image} alt="Coffe"/>
            <div className={coffe.popular ? "coffe-popular" : ""}>
              {coffe.popular ? "Popular" : ""}
            </div>
          </div>
          <div className="container-description">
            <h3 className="coffe-name">{coffe.name}</h3>
            <div className="coffe-price">{coffe.price}</div>
          </div>
          <div className="container-rating">
            <div className="coffe-rating">
              <img
                className="start"
                src={coffe.rating ? StartFill : Start}
                alt="Start"
              />
              <div>
                {coffe.rating && coffe.votes !== 0 ? (
                  <span>
                    {coffe.rating}
                    <span className="votes"> ({coffe.votes} votes)</span>
                  </span>
                ) : (
                  <span className="no-rating">No Ratings</span>
                )}
              </div>
            </div>
            <h4 className="sold-out">{!coffe.available ? "Sold Out" : ""}</h4>
          </div>
        </div>
      ))}
    </div>
  ); 
}

export default CoffeListing;
