import classes from './Dataview.module.css';
import { Person } from './types';
import { useRouter } from 'next/router';

function DataviewItem(props: Person) {
  // const { getDetailsData } = useContext(Context);\
  const router = useRouter();
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
        // onClick={() => {
        //   getDetailsData(props.url?.slice(29) || '');
        // }}
        onClick={() =>
          router.push({
            pathname: `/details/${props.url?.slice(29)}`,
          })
        }
      >
        Details
      </button>
    </div>
  );
}

export default DataviewItem;
