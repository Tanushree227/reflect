import ShareItem from "./ShareItem";
import classes from "./ShareList.module.css";

function ShareList(props) {
  return(
  <ul className={classes.list}>
    {props.shares.map((share) => (
      <ShareItem
        key={share.id}
        id={share.id}
        image={share.image}
        title={share.title}
        name={share.name}
        description={share.description}
      />
    ))}
  </ul>
  );
}

export default ShareList;
