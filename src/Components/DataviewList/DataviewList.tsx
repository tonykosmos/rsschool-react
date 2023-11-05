import DataviewItem from '../DataviewItem/DataviewItem';
import { DataviewListProps } from './types';
import { Person } from '../DataviewItem/types';

import classes from './DataviewList.module.css';
import { Outlet } from 'react-router-dom';

function DataviewList(props: DataviewListProps) {
  return (
    <div className={classes.flexContainer}>
      <div>
        <div>
          {props.data.map((item: Person) => (
            <DataviewItem
              key={item.name}
              name={item.name}
              height={item.height}
              mass={item.mass}
              hair_color={item.hair_color}
              birth_year={item.birth_year}
              url={item.url}
            />
          ))}
        </div>
      </div>
      <div className={classes.detailsPage}>
        <Outlet />
      </div>
    </div>
  );
}

export default DataviewList;
