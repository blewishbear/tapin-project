import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { beerThunk } from "../store/beer";
import './Beer.css'

export default function Beer() {
  const beers = useSelector((state) => state.beer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(beerThunk());
  }, []);
  return (
    <div className="layout-centered">
      <div className="content-container">
        <div className="beer-content">
          <h1>Beer</h1>
          <ul className="beer-list">
            {beers.map((beer) => (
              <div key={beer.name} className="beer-list-wrapper">
                <div className="beer-list-left">
                  <img
                    className="beer-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxCXZDcyblJW3vsTVwkph1RifHZXvyQHqfQ&usqp=CAU"
                  />
                  <div className="beer-content-wrapper">
                    <p>Beer: <span className="emphasis"></span>{beer.name}</p>
                    <p>Style: <span className="emphasis"></span>{beer.style}</p>
                    <p>Description: <span className="emphasis"></span>{beer.description}</p>
                  </div>
                </div>
                <div className="beer-list-right"></div>
                <p>
                </p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

{
  /* export default Productpage; */
}
{
  /* return(
        <div>
            {products.map((productItem)=>(
                <div key={productItem.title} className="productContainer">
                    {/* <h3>{productItem.title}</h3> */
}
{
  /* <div className="image-block">
                        <img className="images" src={productItem.image} />
                        <h4>${productItem.price}</h4>
                    </div>
                </div>
             ))}
        </div> */
}
