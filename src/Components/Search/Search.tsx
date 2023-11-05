import { useState, useEffect } from 'react';
import classes from './Search.module.css';
import { SearchProps } from './types';
import { apiUrl } from '../../constants/api';
import { useSearchParams } from 'react-router-dom';

function Search(props: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const urlSearchParam = searchParams.get('search');
    const pageSearchParam = searchParams.get('page');
    if (urlSearchParam) {
      localStorage.setItem('searchValue', urlSearchParam);
    }
    const savedSearchValue: string = localStorage.getItem('searchValue') || '';
    setSearchValue(savedSearchValue);
    // setSearchParams({ search: savedSearchValue });

    if (pageSearchParam) {
      props.updateData(
        savedSearchValue || '',
        `${apiUrl}/?page=${searchParams.get('page')}&search=${savedSearchValue}`
      );
      setSearchParams({ search: savedSearchValue, page: pageSearchParam });
    } else {
      props.updateData(
        savedSearchValue || '',
        `${apiUrl}?search=${savedSearchValue}`
      );
      setSearchParams({ search: savedSearchValue });
    }
  }, []);

  function searchData(searchValue: string) {
    props.updateData(searchValue, `${apiUrl}?search=${searchValue}`);
    localStorage.setItem('searchValue', searchValue);
    setSearchParams({ search: searchValue });
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
        onClick={() => searchData(searchValue)}
        disabled={props.disabled}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
