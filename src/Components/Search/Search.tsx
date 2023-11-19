import { useEffect, useContext } from 'react';
import classes from './Search.module.css';
import { SearchProps } from './types';
import { useSearchParams } from 'react-router-dom';
import { Context } from '../../context/context';
import { updateCurrentPage, updateSearchValue } from '../../store/searchSlice';
import { useAppDispatch } from '../../store/hooks';

function Search(props: SearchProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchValue, getSearchValue } = useContext(Context);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const urlSearchParam = searchParams.get('search');
    const pageSearchParam = searchParams.get('page');
    const savedSearchValue: string =
      urlSearchParam || localStorage.getItem('searchValue') || '';
    getSearchValue(savedSearchValue);

    if (pageSearchParam) {
      setSearchParams({ search: savedSearchValue, page: pageSearchParam });
    } else {
      setSearchParams({ search: savedSearchValue });
    }
  }, []);

  function searchData(searchValue: string) {
    dispatch(updateCurrentPage(1));
    dispatch(updateSearchValue({ searchValue }));
    localStorage.setItem('searchValue', searchValue);
    setSearchParams({ search: searchValue });
  }

  return (
    <div className={classes.search}>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Search..."
        value={searchValue}
        className={classes.search__input}
        onChange={(e) => getSearchValue(e.target.value)}
      />
      <button
        data-testid="search-btn"
        className={classes.search__btn}
        onClick={() => searchData(searchValue)}
        disabled={props.disabled}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
