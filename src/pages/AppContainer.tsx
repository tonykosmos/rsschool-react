import { useState } from 'react';
import Search from '../Components/Search/Search';
import '../styles/App.css';
import ErrorButton from '../Components/ErrorButton/ErrorButton';
import DataviewList from '../Components/DataviewList/DataviewList';
import { ApiResponse, Person } from '../Components/DataviewItem/types';
import Pagination from '../Components/Pagination/Pagination';
import { Routes, Route } from 'react-router-dom';
import ItemDetails from '../Components/ItemDetails/ItemDetails';
import { Context } from '../context/context';
import { LoadSpinner } from '../Components/LoadSpinner/LoadSpinner';
import { ReactContext } from '../context/types';

function AppContainer() {
  const [responseData, setResponseData] = useState<ApiResponse>();
  const [data, setData] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDetailsLoading, setIsDetailsLoading] = useState<boolean>(false);
  const [pageCount, setPageCount] = useState<number>(0);
  const [detailsData, setDetailsData] = useState<Person | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');

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

  const contextValue: ReactContext = {
    searchValue,
    getSearchValue: setSearchValue,
    detailsData,
    data,
    getDetailsData: sendDetailsQuery,
  };

  return (
    <Context.Provider value={contextValue}>
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
                  />
                  <ErrorButton />
                  <hr />
                  {isLoading ? (
                    <div className="loadSpinner">
                      <LoadSpinner />
                    </div>
                  ) : (
                    <div className="dataview-container">
                      <DataviewList />
                    </div>
                  )}
                  <Pagination
                    pageCount={pageCount}
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
              element={<ItemDetails isDetailsLoading={isDetailsLoading} />}
            />
          </Route>
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default AppContainer;
