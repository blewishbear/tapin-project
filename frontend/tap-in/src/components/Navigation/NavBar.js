import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">

        <p>Tap-In Mathias!</p>
        <div className='nav-right'>
          <NavLink to="/taproom">Tap Room</NavLink>

          <NavLink to="/breweries">Brew Spots</NavLink>

          <NavLink to="/beers">Brews</NavLink>
        </div>
        {/*  */}
        {/* <NavLink></NavLink>Tap Out */}

    </nav>
  );
}
