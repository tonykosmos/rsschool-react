import { useEffect, useContext } from 'react';
import classes from './Search.module.css';
import { SearchProps } from './types';
import { apiUrl } from '../../constants/api';
import { useSearchParams } from 'react-router-dom';
import { Context } from '../../context/context';

function Search(props: SearchProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchValue, getSearchValue } = useContext(Context);

  useEffect(() => {
    const urlSearchParam = searchParams.get('search');
    const pageSearchParam = searchParams.get('page');
    const savedSearchValue: string =
      urlSearchParam || localStorage.getItem('searchValue') || '';
    getSearchValue(savedSearchValue);

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
        onChange={(e) => getSearchValue(e.target.value)}
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
