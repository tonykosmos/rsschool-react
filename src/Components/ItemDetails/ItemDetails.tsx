import { Link } from 'react-router-dom';
import classes from './ItemDetails.module.css';
import { ItemDetailsProps } from './types';
import { LoadSpinner } from '../LoadSpinner/LoadSpinner';

function ItemDetails(props: ItemDetailsProps) {
  return (
    <div className={classes.dataviewItem}>
      {!props.isDetailsLoading ? (
        props.data ? (
          <div>
            <h2>{`Name: ${props.data?.name}`}</h2>
            <p>{`Height: ${props.data?.height}`}</p>
            <p>{`Mass: ${props.data?.mass}`}</p>
            <p>{`Birth year: ${props.data?.birth_year}`}</p>
            <p>{`Hair color: ${props.data?.hair_color}`}</p>
            <p>{`Skin color: ${props.data?.skin_color}`}</p>
            <p>{`Gender: ${props.data?.gender}`}</p>
            <p>{`Eye color: ${props.data?.eye_color}`}</p>
            <p>{`Created: ${props.data?.created}`}</p>
            <p>{`Edited: ${props.data?.edited}`}</p>
          </div>
        ) : (
          <h3>No data</h3>
        )
      ) : (
        <LoadSpinner />
      )}
      <Link to="/">
        <button className={classes.detailsBtn}>Close</button>
      </Link>
    </div>
  );
}

export default ItemDetails;
