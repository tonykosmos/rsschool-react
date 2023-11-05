import React, { useState } from 'react';
import Search from '../Components/Search/Search';
import '../styles/App.css';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
import ErrorButton from '../Components/ErrorButton/ErrorButton';
import DataviewList from '../Components/DataviewList/DataviewList';
import { ApiResponse, Person } from '../Components/DataviewItem/types';
import Pagination from '../Components/Pagination/Pagination';
import { Routes, Route } from 'react-router-dom';
import ItemDetails from '../Components/ItemDetails/ItemDetails';

export const Context = React.createContext({} as { (url?: string): void });

function AppContainer() {
  const [responseData, setResponseData] = useState<ApiResponse>();
  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDetailsLoading, setIsDetailsLoading] = useState<boolean>(false);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemsPerPage, setItemsNumPerPage] = useState<number>(10);
  const [detailsData, setDetailsData] = useState<Person | null>(null);

  function updateData(newData: ApiResponse) {
    setData(newData.results);
    setPageCount(newData.count);
    setResponseData(newData);
  }

  function updateLoadingStatus(isLoading: boolean) {
    setIsLoading(isLoading);
  }

  function sendSearchQuery(value: string, url?: string) {
    updateLoadingStatus(true);
    localStorage.setItem('searchValue', value);
    fetch(`${url}`)
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

  function changeItemsPerPage(value: number) {
    setItemsNumPerPage(value);
  }

  function sendDetailsQuery(url?: string) {
    setIsDetailsLoading(true);
    fetch(`${url}`)
      .then((res) => res.json())
      .then((res) => {
        setDetailsData(res);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsDetailsLoading(false);
      });
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
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex-container">
                <div className="content-container">
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
                      {data?.length ? (
                        <Context.Provider value={sendDetailsQuery}>
                          <DataviewList
                            data={data}
                            changeItemsPerPage={changeItemsPerPage}
                          />
                        </Context.Provider>
                      ) : (
                        <h2 className="">
                          There is no results for this search
                        </h2>
                      )}
                    </div>
                  )}
                  <Pagination
                    pageCount={pageCount}
                    itemsPerPage={itemsPerPage}
                    changePage={changePage}
                    previousPage={responseData?.previous}
                    nextPage={responseData?.next}
                    hidden={isLoading || !Boolean(data?.length)}
                  />
                </div>
              </div>
            }
          >
            <Route
              path="/details"
              element={
                <ItemDetails
                  data={detailsData}
                  isDetailsLoading={isDetailsLoading}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default AppContainer;
