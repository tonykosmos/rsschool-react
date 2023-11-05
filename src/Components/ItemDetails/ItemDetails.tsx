import classes from './ItemDetails.module.css';

function ItemDetails() {
  return (
    <div className={classes.dataviewItem}>
      <div>
        <h2>{`Name: name`}</h2>
        <p>{`Height: height`}</p>
        <p>{`Mass: mass`}</p>
        <p>{`Birth year: year`}</p>
        <p>{`Hair color: color`}</p>
      </div>
      <button className={classes.detailsBtn}>Details</button>
    </div>
  );
}

export default ItemDetails;
