import React from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation()
{
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Reflect</div>
            <nav>
                <ul>
                    <li><Link to="/" exact>Home</Link></li>
                    <li><Link to="/newshare">Share Experience</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;