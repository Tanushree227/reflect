import classes from "./ShareItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function ShareItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteHandler() {
    if(itemIsFavorite) 
    {
      favoritesCtx.removeFavorite(props.id);
    }
    else
    {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        name: props.name
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>
            <strong>{props.name}</strong>
          </p>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>{itemIsFavorite ? 'Remove from Wishlist' : 'Add to Wishlist'}</button>
        </div>
      </Card>
    </li>
  );
}

export default ShareItem;
