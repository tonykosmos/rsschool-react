import React from 'react';
import Search from './Components/Search/Search';
import './styles/App.css';
import { apiUrl } from './constants/api';
import DataviewItem from './Components/DataviewItem/DataviewItem';
import { AppState, Person } from './types/types';

class App extends React.Component {
  // constructor(props) {
  //     super(props);
  //     // this.state = {
  //     //     data: []
  //     // }
  // }

  state: AppState = {
    data: [],
    isLoading: false,
  };

  sendSearchQuery = (value: string) => {
    this.setState({ isLoading: true });
    fetch(value ? `${apiUrl}/?search=${value}` : `${apiUrl}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.results,
          isLoading: false,
        });
      });
    window.localStorage;
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
      <div className="App">
        <Search
          sendQuery={this.sendSearchQuery}
          disabled={this.state.isLoading}
        />
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
    );
  }
}

export default App;
