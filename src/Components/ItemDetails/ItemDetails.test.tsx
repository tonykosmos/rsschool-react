import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import ItemDetails from './ItemDetails';
import { Context } from '../../context/context';
import {
  mockDataviewListData,
  mockDetailsData,
  mockSearchString,
} from '../../mocks/mockData';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import DataviewList from '../DataviewList/DataviewList';

const onChange = vi.fn();

describe('Detailed Card tests', () => {
  it('Loading indicator is displayed while fetching data', () => {
    render(
      <BrowserRouter>
        <Context.Provider
          value={{
            searchValue: mockSearchString,
            getSearchValue: onChange,
            detailsData: mockDetailsData,
            data: mockDataviewListData,
            getDetailsData: onChange,
          }}
        >
          <ItemDetails isDetailsLoading={true} />
        </Context.Provider>
      </BrowserRouter>
    );

    const loadSpinner = screen.getByTestId('load-spinner');
    expect(loadSpinner).toBeInTheDocument();
  });

  it('Detailed card component correctly displays the detailed card data', () => {
    render(
      <BrowserRouter>
        <Context.Provider
          value={{
            searchValue: mockSearchString,
            getSearchValue: onChange,
            detailsData: mockDetailsData,
            data: mockDataviewListData,
            getDetailsData: onChange,
          }}
        >
          <ItemDetails isDetailsLoading={false} />
        </Context.Provider>
      </BrowserRouter>
    );

    const nameText = screen.getByText(`Name: ${mockDetailsData.name}`);
    expect(nameText).toBeInTheDocument();
  });

  it('Clicking the close button hides the component', () => {
    render(
      <MemoryRouter initialEntries={['/details']}>
        <Context.Provider
          value={{
            searchValue: mockSearchString,
            getSearchValue: onChange,
            detailsData: mockDetailsData,
            data: mockDataviewListData,
            getDetailsData: onChange,
          }}
        >
          <Routes>
            <Route path="/" element={<DataviewList />}></Route>
            <Route
              path="/details"
              element={<ItemDetails isDetailsLoading={false} />}
            />
          </Routes>
        </Context.Provider>
      </MemoryRouter>
    );

    const button = screen.getByTestId('details-close-btn');
    fireEvent.click(button);
    expect(location.pathname).toBe('/');
  });
});
