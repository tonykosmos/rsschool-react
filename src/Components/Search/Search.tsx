import { useRouter } from 'next/router';
import classes from './Search.module.css';
import { useState } from 'react';
import { updateCurrentPage, updateSearchValue } from '../../store/searchSlice';
import { store } from '../../store';

export default function Search() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  const getSearchData = () => {
    store.dispatch(updateSearchValue(searchValue));
    store.dispatch(updateCurrentPage(1));
    router.push({
      query: { page: '1', search: searchValue },
    });
    localStorage.setItem('searchValue', searchValue);
  };

  return (
    <div className={classes.search}>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Search..."
        value={searchValue}
        className={classes.search__input}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        data-testid="search-btn"
        className={classes.search__btn}
        onClick={() => getSearchData()}
        // disabled={props.disabled}
      >
        Search
      </button>
    </div>
  );
}
