import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";

function MainNavigation()
{
    const favoritesCtx = useContext(FavoritesContext);

    return(
        <header className={classes.header}>
            <div className={classes.logo}>Reflect</div>
            <nav>
                <ul>
                    <li><Link to="/" exact>Home</Link></li>
                    <li><Link to="/newshare">Share Experience</Link></li>
                    <li><Link to="/favorites">Favorites<span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link></li>
                    <li className={classes.login}><Link to="/login">Log In</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;