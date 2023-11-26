import DataviewItem from '../DataviewItem/DataviewItem';
import { ApiResponse, Person } from '../DataviewItem/types';
import classes from './DataviewList.module.css';

interface DataviewListProps {
  cards: ApiResponse;
}

export default function DataviewList(props: DataviewListProps) {
  return (
    <div className={classes.flexContainer}>
      <div>
        {!false ? (
          props.cards.results.length ? (
            props.cards.results.map((item: Person) => (
              <DataviewItem
                key={item.name}
                name={item.name}
                height={item.height}
                mass={item.mass}
                hair_color={item.hair_color}
                birth_year={item.birth_year}
                url={item.url}
              />
            ))
          ) : (
            <h2>There is no results for this search</h2>
          )
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}
