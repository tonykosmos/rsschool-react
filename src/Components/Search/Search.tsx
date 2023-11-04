import { useState, useEffect } from 'react';
import classes from './Search.module.css';
import { SearchProps } from './types';
import { apiUrl } from '../../constants/api';

function Search(props: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    const savedSearchValue: string | null = localStorage.getItem('searchValue');
    if (savedSearchValue) {
      setSearchValue(savedSearchValue);
    }

    props.updateData(savedSearchValue || '', apiUrl);
  }, []);

  return (
    <div className={classes.search}>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        className={classes.search__input}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        className={classes.search__btn}
        onClick={() => props.updateData(searchValue, apiUrl)}
        disabled={props.disabled}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
