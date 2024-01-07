import React from 'react';
import classes from './Search.module.css';
import { SearchProps, SearchState } from './types';
import { apiUrl } from '../../constants/api';

export class Search extends React.Component<SearchProps> {
  state: SearchState = {
    searchValue: '',
  };

  componentDidMount(): void {
    if (this.props.value) {
      this.setState({ searchValue: this.props.value });
    }
    const savedSearchValue: string | null = localStorage.getItem('searchValue');
    this.sendSearchQuery(savedSearchValue ? savedSearchValue : '');
  }

  sendSearchQuery = (value: string) => {
    this.props.updateLoadingStatus(true);
    localStorage.setItem('searchValue', value);
    fetch(value ? `${apiUrl}/?search=${value}` : `${apiUrl}`)
      .then((res) => res.json())
      .then((res) => {
        this.props.updateData(res.results);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.props.updateLoadingStatus(false);
      });
  };

  render() {
    return (
      <div className={classes.search}>
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchValue}
          className={classes.search__input}
          onChange={(e) => this.setState({ searchValue: e.target.value })}
        />
        <button
          className={classes.search__btn}
          onClick={() => this.sendSearchQuery(this.state.searchValue)}
          disabled={this.props.disabled}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
