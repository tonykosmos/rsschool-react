import classes from './ItemDetails.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ItemDetailsProps } from './types';

export default function ItemDetails(props: ItemDetailsProps) {
  const router = useRouter();
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
      {/* <Link href="/">
        <button data-testid="details-close-btn" className={classes.detailsBtn}>
          Close
        </button>
      </Link> */}
      <button
        data-testid="details-close-btn"
        className={classes.detailsBtn}
        onClick={() =>
          router.push({
            pathname: '/',
          })
        }
      >
        Close
      </button>
    </div>
  );
}
//   const { detailsId } = useContext(Context);
//   const { data, isLoading } = useGetDetailsQuery(detailsId);

//   const detailsData = useAppSelector((state) => state.search.detailsData);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     if (data) {
//       dispatch(setDetailsData(data));
//     }
//   }, [data, dispatch]);

//   return (
//     <div className={classes.dataviewItem}>
//       {!isLoading ? (
//         detailsData ? (
//           <div>
//             <h2>{`Name: ${detailsData.name || ''}`}</h2>
//             <p>{`Height: ${detailsData.height || ''}`}</p>
//             <p>{`Mass: ${detailsData.mass || ''}`}</p>
//             <p>{`Birth year: ${detailsData.birth_year || ''}`}</p>
//             <p>{`Hair color: ${detailsData.hair_color || ''}`}</p>
//             <p>{`Skin color: ${detailsData.skin_color || ''}`}</p>
//             <p>{`Gender: ${detailsData.gender || ''}`}</p>
//             <p>{`Eye color: ${detailsData.eye_color || ''}`}</p>
//             <p>{`Created: ${detailsData.created || ''}`}</p>
//             <p>{`Edited: ${detailsData.edited || ''}`}</p>
//           </div>
//         ) : (
//           <h3>No data</h3>
//         )
//       ) : (
//         <LoadSpinner />
//       )}
//       <Link to="/">
//         <button data-testid="details-close-btn" className={classes.detailsBtn}>
//           Close
//         </button>
//       </Link>
//     </div>
//   );
// }

// export default ItemDetails;
