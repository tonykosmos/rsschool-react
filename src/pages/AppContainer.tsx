import { useState } from 'react';
import Search from '../Components/Search/Search';
import '../styles/App.css';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
import ErrorButton from '../Components/ErrorButton/ErrorButton';
import DataviewList from '../Components/DataviewList/DataviewList';
import { ApiResponse, Person } from '../Components/DataviewItem/types';
import Pagination from '../Components/Pagination/Pagination';
import { apiUrl } from '../constants/api';

function AppContainer() {
  const [responseData, setResponseData] = useState<ApiResponse>();
  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageCount, setPageCount] = useState<number>(0);

  function updateData(newData: ApiResponse) {
    setData(newData.results);
    setPageCount(newData.count);
    setResponseData(newData);
  }

  function updateLoadingStatus(isLoading: boolean) {
    setIsLoading(isLoading);
  }

  function sendSearchQuery(value: string, url?: string) {
    if (!url) {
      url === apiUrl;
    }
    updateLoadingStatus(true);
    localStorage.setItem('searchValue', value);
    fetch(value ? `${url}/?search=${value}` : `${url}`)
      .then((res) => res.json())
      .then((res) => {
        updateData(res);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        updateLoadingStatus(false);
      });
  }

  function changePage(url: string) {
    sendSearchQuery(localStorage.getItem('searchValue') || '', url);
  }

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
          updateData={sendSearchQuery}
          updateLoadingStatus={updateLoadingStatus}
          disabled={isLoading}
          value={localStorage.getItem('searchValue') || ''}
        />
        <ErrorButton />
        <hr />
        {isLoading ? (
          <div className="loadSpinner">{loadSpinner}</div>
        ) : (
          <div className="dataview-container">
            {data.length ? (
              <DataviewList data={data} />
            ) : (
              <h2 className="">There is no results for this search</h2>
            )}
          </div>
        )}
        <Pagination
          pageCount={pageCount}
          changePage={changePage}
          previousPage={responseData?.previous}
          nextPage={responseData?.next}
          hidden={isLoading}
        />
      </div>
    </ErrorBoundary>
  );
}

export default AppContainer;
