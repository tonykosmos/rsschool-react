import React from 'react';
import Search from '../Components/Search/Search';
import '../styles/App.css';
import { AppState } from '../types/types';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
import ErrorButton from '../Components/ErrorButton/ErrorButton';
import DataviewList from '../Components/DataviewList/DataviewList';
import { Person } from '../Components/DataviewItem/types';

class AppContainer extends React.Component {
  state: AppState = {
    data: [],
    isLoading: false,
    hasError: false,
  };

  handleError() {
    try {
      throw new Error('Rendering error');
    } catch (error) {
      this.setState({ hasError: true });
    }
  }

  updateData = (data: Person[]) => {
    this.setState((prev) => {
      return {
        ...prev,
        data,
      };
    });
  };

  updateLoadingStatus = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  render() {
    const loadSpinner = (
      <img
        src="./src/assets/load-spinner.svg"
        width="50"
        height="50"
        alt="spinner"
      />
    );

    return (
      <ErrorBoundary>
        <div className="App">
          <Search
            updateData={this.updateData}
            updateLoadingStatus={this.updateLoadingStatus}
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
                <DataviewList data={this.state.data} />
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

export default AppContainer;
