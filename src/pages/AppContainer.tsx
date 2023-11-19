import { useState } from 'react';
import Search from '../Components/Search/Search';
import '../styles/App.css';
import ErrorButton from '../Components/ErrorButton/ErrorButton';
import DataviewList from '../Components/DataviewList/DataviewList';
import { ApiResponse } from '../Components/DataviewItem/types';
import Pagination from '../Components/Pagination/Pagination';
import { Routes, Route } from 'react-router-dom';
import ItemDetails from '../Components/ItemDetails/ItemDetails';
import { Context } from '../context/context';
import { ReactContext } from '../context/types';
import ErrorPage404 from '../Components/ErrorPage404/ErrorPage404';
import { useAppSelector } from '../store/hooks';

function AppContainer() {
  const [responseData] = useState<ApiResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [detailsId, setDetailsId] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const data = useAppSelector((state) => state.search.cardsData);

  function updateLoadingStatus(isLoading: boolean) {
    setIsLoading(isLoading);
  }

  function sendDetailsQuery(id: string) {
    setDetailsId(id);
  }

  const contextValue: ReactContext = {
    searchValue,
    getSearchValue: setSearchValue,
    detailsId,
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
                    updateLoadingStatus={updateLoadingStatus}
                    disabled={isLoading}
                  />
                  <ErrorButton />
                  <hr />
                  <div className="dataview-container">
                    <DataviewList />
                  </div>
                  <Pagination
                    previousPage={responseData?.previous}
                    nextPage={responseData?.next}
                    hidden={isLoading || !Boolean(data?.results.length)}
                  />
                </div>
              </div>
            }
          >
            <Route path="/details" element={<ItemDetails />} />
          </Route>
          <Route path="/*" element={<ErrorPage404 />}></Route>
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default AppContainer;
