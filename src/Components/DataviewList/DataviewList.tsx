import DataviewItem from '../DataviewItem/DataviewItem';
import { Person } from '../DataviewItem/types';

import classes from './DataviewList.module.css';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetCardsQuery } from '../../store/cardsApi';
import { setCardsData, updatePageCount } from '../../store/searchSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { LoadSpinner } from '../LoadSpinner/LoadSpinner';

function DataviewList() {
  const cardsData = useAppSelector((state) => state.search.cardsData);
  const searchValue = useAppSelector((state) => state.search.searchValue);
  const currentPage = useAppSelector((state) => state.search.currentPage);
  const { data, isLoading } = useGetCardsQuery({
    searchValue: localStorage.getItem('searchValue') || '',
    page: currentPage,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setCardsData(data));
      dispatch(updatePageCount(data.count));
    }
  }, [searchValue, data, currentPage, isLoading, dispatch]);

  return (
    <div className={classes.flexContainer}>
      <div>
        {!isLoading ? (
          cardsData.results.length ? (
            cardsData.results.map((item: Person) => (
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
          <LoadSpinner />
        )}
      </div>
      <div className={classes.detailsPage}>
        <Outlet />
      </div>
    </div>
  );
}

export default DataviewList;
