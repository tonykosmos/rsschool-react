import { Link } from 'react-router-dom';
import classes from './Dataview.module.css';
import { Person } from './types';
import { useContext } from 'react';
import { Context } from '../../context/context';

function DataviewItem(props: Person) {
  const sendDetailsQuery = useContext(Context);
  return (
    <div className={classes.dataviewItem}>
      <div>
        <h2>{`Name: ${props.name}`}</h2>
        <p>{`Height: ${props.height}`}</p>
        <p>{`Mass: ${props.mass}`}</p>
        <p>{`Birth year: ${props.birth_year}`}</p>
        <p>{`Hair color: ${props.hair_color}`}</p>
      </div>
      <Link to="/details">
        <button
          className={classes.detailsBtn}
          onClick={() => {
            sendDetailsQuery(props.url);
          }}
        >
          Details
        </button>
      </Link>
    </div>
  );
}

export default DataviewItem;
