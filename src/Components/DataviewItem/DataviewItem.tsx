import classes from './Dataview.module.css';
import { Person } from './types';

function DataviewItem(props: Person) {
  return (
    <div className={classes.dataviewItem}>
      <div>
        <h2>{`Name: ${props.name}`}</h2>
        <p>{`Height: ${props.height}`}</p>
        <p>{`Mass: ${props.mass}`}</p>
        <p>{`Birth year: ${props.birth_year}`}</p>
        <p>{`Hair color: ${props.hair_color}`}</p>
      </div>
      <button className={classes.detailsBtn}>Details</button>
    </div>
  );
}

export default DataviewItem;
