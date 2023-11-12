import { Link } from 'react-router-dom';
import classes from './ItemDetails.module.css';
import { ItemDetailsProps } from './types';
import { LoadSpinner } from '../LoadSpinner/LoadSpinner';
import { useContext } from 'react';
import { Context } from '../../context/context';

function ItemDetails(props: ItemDetailsProps) {
  const { detailsData } = useContext(Context);

  return (
    <div className={classes.dataviewItem}>
      {!props.isDetailsLoading ? (
        detailsData ? (
          <div>
            <h2>{`Name: ${detailsData.name || ''}`}</h2>
            <p>{`Height: ${detailsData.height || ''}`}</p>
            <p>{`Mass: ${detailsData.mass || ''}`}</p>
            <p>{`Birth year: ${detailsData.birth_year || ''}`}</p>
            <p>{`Hair color: ${detailsData.hair_color || ''}`}</p>
            <p>{`Skin color: ${detailsData.skin_color || ''}`}</p>
            <p>{`Gender: ${detailsData.gender || ''}`}</p>
            <p>{`Eye color: ${detailsData.eye_color || ''}`}</p>
            <p>{`Created: ${detailsData.created || ''}`}</p>
            <p>{`Edited: ${detailsData.edited || ''}`}</p>
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
