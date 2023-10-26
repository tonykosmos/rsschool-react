import React from 'react';
import classes from './Search.module.css';
import { SearchProps, SearchState } from '../../types/types';

export class Search extends React.Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
  }

  state: SearchState = {
    searchValue: '',
  };

  componentDidMount(): void {
    if (this.props.value) {
      this.setState({ searchValue: this.props.value });
    }
  }

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
          onClick={() => this.props.sendQuery(this.state.searchValue)}
          disabled={this.props.disabled}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
