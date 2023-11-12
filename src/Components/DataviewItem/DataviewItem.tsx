import { Link } from 'react-router-dom';
import classes from './Dataview.module.css';
import { Person } from './types';
import { useContext } from 'react';
import { Context } from '../../context/context';

function DataviewItem(props: Person) {
  const { getDetailsData } = useContext(Context);

  return (
    <div className={classes.dataviewItem} data-testid="dataview-item">
      <div>
        <h2>{`Name: ${props.name}`}</h2>
        <p>{`Height: ${props.height}`}</p>
        <p>{`Mass: ${props.mass}`}</p>
        <p>{`Birth year: ${props.birth_year}`}</p>
        <p>{`Hair color: ${props.hair_color}`}</p>
      </div>
      <Link to="/details">
        <button
          data-testid="open-details-btn"
          className={classes.detailsBtn}
          onClick={() => {
            getDetailsData(props.url || '');
          }}
        >
          Details
        </button>
      </Link>
    </div>
  );
}

export default DataviewItem;
