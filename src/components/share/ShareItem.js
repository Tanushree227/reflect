import classes from "./ShareItem.module.css";
import Card from "../ui/Card";

function ShareItem(props) {
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
          <button>Show More</button>
        </div>
      </Card>
    </li>
  );
}

export default ShareItem;
