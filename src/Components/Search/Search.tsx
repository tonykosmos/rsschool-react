import { useState, useEffect } from 'react';
import classes from './Search.module.css';
import { SearchProps } from './types';
import { apiUrl } from '../../constants/api';

function Search(props: SearchProps) {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const savedSearchValue: string | null = localStorage.getItem('searchValue');
    if (savedSearchValue) {
      setSearchValue(savedSearchValue);
    }

    sendSearchQuery(savedSearchValue || '');
  }, []);

  function sendSearchQuery(value: string) {
    props.updateLoadingStatus(true);
    localStorage.setItem('searchValue', value);
    fetch(value ? `${apiUrl}/?search=${value}` : `${apiUrl}`)
      .then((res) => res.json())
      .then((res) => {
        props.updateData(res.results);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        props.updateLoadingStatus(false);
      });
  }

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
        onClick={() => sendSearchQuery(searchValue)}
        disabled={props.disabled}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
