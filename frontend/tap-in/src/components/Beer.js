import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { beerThunk } from '../store/beer';



export default function Beer() {
    const beers = useSelector(state => state.beer);

    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(beerThunk());
    }, [])
    return (
        <div>
        {beers.map((beer) => (
            <div key={beer.name} className="beer-list">
                <h4>{beer.name}</h4>
                <h4>{beer.description}</h4>
                <h4>{beer.style}</h4>
            </div>
        ))}
        </div>
    )
}

{/* export default Productpage; */}
    {/* return(
        <div>
            {products.map((productItem)=>(
                <div key={productItem.title} className="productContainer">
                    {/* <h3>{productItem.title}</h3> */}
                    {/* <div className="image-block">
                        <img className="images" src={productItem.image} />
                        <h4>${productItem.price}</h4>
                    </div>
                </div>
             ))}
        </div> */}
