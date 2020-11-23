import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

export default function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (

            <div className="page-wrapper">
                <div className="nav-btn">
                    <div className="loginNav">
                        <NavLink className='btn nav-btn-link' to="/login">Log In</NavLink>
                    </div>
                    <div className="loginNav">
                        <NavLink className='btn nav-btn-link' to="/signup">Create an account</NavLink>
                    </div>
                </div>
            </div>

        );
    }



    return (
        <>
            <nav className="navbody">
                <div>
                    {/* <NavLink exact to="/">Home</NavLink> */}
                    {isLoaded && sessionLinks}
                </div>
            </nav>
        </>
    );
}
