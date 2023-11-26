import classes from './ItemDetails.module.css';
import { useRouter } from 'next/router';

import { ItemDetailsProps } from './types';
import { store } from '../../store';

export default function ItemDetails(props: ItemDetailsProps) {
  const router = useRouter();
  const currentPage = store.getState().search.currentPage;
  const searchValue = store.getState().search.searchValue;
  return (
    <div className={classes.dataviewItem}>
      {true ? (
        props.data ? (
          <div>
            <h2>{`Name: ${props.data.name || ''}`}</h2>
            <p>{`Height: ${props.data.height || ''}`}</p>
            <p>{`Mass: ${props.data.mass || ''}`}</p>
            <p>{`Birth year: ${props.data.birth_year || ''}`}</p>
            <p>{`Hair color: ${props.data.hair_color || ''}`}</p>
            <p>{`Skin color: ${props.data.skin_color || ''}`}</p>
            <p>{`Gender: ${props.data.gender || ''}`}</p>
            <p>{`Eye color: ${props.data.eye_color || ''}`}</p>
            <p>{`Created: ${props.data.created || ''}`}</p>
            <p>{`Edited: ${props.data.edited || ''}`}</p>
          </div>
        ) : (
          <h3>No data</h3>
        )
      ) : (
        <h2>Loading...</h2>
      )}
      <button
        data-testid="details-close-btn"
        className={classes.detailsBtn}
        onClick={() =>
          router.push({
            pathname: '/',
            query: { page: currentPage, search: searchValue },
          })
        }
      >
        Close
      </button>
    </div>
  );
}
