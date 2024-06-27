import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/image';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearchClick = () => {
        navigate('/search');
    };

    const handleHomeClick = () => {
        navigate('/home');
    };

    return (
        <div className='navbar'>
            <img src={assets.lo_go2} alt="logo" className="logo" />
            <div className="navbar-right">
                <img src={assets.searchicon} alt="search" onClick={handleSearchClick} />
                <img src={assets.home} alt="home" onClick={handleHomeClick} />
                <div className="navbar-search-icon">
                    <img src={assets.basketicon1} alt="basket" />
                    <div className="dot"></div>
                </div>
                <button>sign in</button>
            </div>
        </div>
    );
}

export default Navbar;
