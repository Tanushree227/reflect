import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteShare) 
    {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteShare);
        });
    }

    function removeFavoriteHandler(shareId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(share => share.id != shareId);
        });
    }

    function itemIsFavoriteHandler(shareId) {
        return userFavorites.some(share => share.id === shareId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}