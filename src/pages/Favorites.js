import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import ShareList from "../components/share/ShareList";

function Favorites()
{
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0)
    {
        content = <p>No Favorites yet. Do add some?</p>
    }
    else
    {
        content = <ShareList shares={favoritesCtx.favorites} />
    }

    return(
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default Favorites;