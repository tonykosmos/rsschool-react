import React from 'react';
import Search from './Components/Search/Search';
import './styles/App.css';
import { apiUrl } from './constants/api';
import DataviewItem from './Components/DataviewItem/DataviewItem';
import { AppState, Person } from './types/types';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import ErrorButton from './Components/ErrorButton/ErrorButton';

class App extends React.Component {
  state: AppState = {
    data: [],
    isLoading: false,
    hasError: false,
  };

  componentDidMount(): void {
    const savedSearchValue: string | null = localStorage.getItem('searchValue');
    this.sendSearchQuery(savedSearchValue ? savedSearchValue : '');
  }

  handleError() {
    try {
      throw new Error('Rendering error');
    } catch (error) {
      this.setState({ hasError: true });
    }
  }

  sendSearchQuery = (value: string) => {
    this.setState({ isLoading: true });
    localStorage.setItem('searchValue', value);

    fetch(value ? `${apiUrl}/?search=${value}` : `${apiUrl}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.results,
        });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    const loadSpinner = (
      <img
        src="../assets/load-spinner.svg"
        width="50"
        height="50"
        alt="spinner"
      />
    );

    return (
      <ErrorBoundary>
        <div className="App">
          <Search
            sendQuery={this.sendSearchQuery}
            disabled={this.state.isLoading}
            value={localStorage.getItem('searchValue') || ''}
          />
          <ErrorButton />
          <hr />
          {this.state.isLoading ? (
            <div className="loadSpinner">{loadSpinner}</div>
          ) : (
            <div className="dataview-container">
              {this.state.data.length ? (
                this.state.data.map((item: Person) => (
                  <DataviewItem
                    key={item.name}
                    name={item.name}
                    height={item.height}
                    mass={item.mass}
                    hair_color={item.hair_color}
                    birth_year={item.birth_year}
                  />
                ))
              ) : (
                <h2 className="">There is no results for this search</h2>
              )}
            </div>
          )}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
