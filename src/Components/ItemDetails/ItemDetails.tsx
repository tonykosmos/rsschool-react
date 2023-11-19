import { Link } from 'react-router-dom';
import classes from './ItemDetails.module.css';
import { LoadSpinner } from '../LoadSpinner/LoadSpinner';
import { useContext, useEffect } from 'react';
import { useGetDetailsQuery } from '../../store/cardsApi';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setDetailsData } from '../../store/searchSlice';
import { Context } from '../../context/context';

function ItemDetails() {
  const { detailsId } = useContext(Context);
  const { data, isLoading } = useGetDetailsQuery(detailsId);

  const detailsData = useAppSelector((state) => state.search.detailsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setDetailsData(data));
    }
  });

  return (
    <div className={classes.dataviewItem}>
      {!isLoading ? (
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
        <button data-testid="details-close-btn" className={classes.detailsBtn}>
          Close
        </button>
      </Link>
    </div>
  );
}

export default ItemDetails;
