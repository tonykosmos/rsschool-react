import { store } from '../../store';
import classes from './Dataview.module.css';
import { Person } from './types';
import { useRouter } from 'next/router';

function DataviewItem(props: Person) {
  const router = useRouter();
  const currentPage = store.getState().search.currentPage;
  const searchValue = store.getState().search.searchValue;
  console.log(props.url?.split('/'));
  return (
    <div className={classes.dataviewItem} data-testid="dataview-item">
      <div>
        <h2>{`Name: ${props.name}`}</h2>
        <p>{`Height: ${props.height}`}</p>
        <p>{`Mass: ${props.mass}`}</p>
        <p>{`Birth year: ${props.birth_year}`}</p>
        <p>{`Hair color: ${props.hair_color}`}</p>
      </div>
      <button
        data-testid="open-details-btn"
        className={classes.detailsBtn}
        onClick={() =>
          router.push({
            pathname: `/details/${
              props.url?.split('/')[props.url?.split('/').length - 2]
            }`,
            query: { page: currentPage, search: searchValue },
          })
        }
      >
        Details
      </button>
    </div>
  );
}

export default DataviewItem;
