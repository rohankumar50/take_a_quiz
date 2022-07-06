import React, { useState } from 'react'
import './Navbar.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import Logo from '../assets/images/testometrika.svg';


const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="navbar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <div className="line"></div>
                <div className="header">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} />
                        </Link>

                    </div>
                    <div className="right-content">
                        <div className="searchbar">
                            <input type="text" placeholder='Search among 288 tests...' />
                            <FaIcons.FaSearch className='search-icon' />
                        </div>
                        <div className="user">
                            <FaIcons.FaUserCircle className='user-icon' />
                        </div>
                    </div>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className='menu-bars-close'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar