import DataviewItem from '../DataviewItem/DataviewItem';
import { Person } from '../DataviewItem/types';

import classes from './DataviewList.module.css';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/context';

function DataviewList() {
  const { data } = useContext(Context);

  return (
    <div className={classes.flexContainer}>
      <div>
        {data.length ? (
          data.map((item: Person) => (
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
        )}
      </div>
      <div className={classes.detailsPage}>
        <Outlet />
      </div>
    </div>
  );
}

export default DataviewList;
