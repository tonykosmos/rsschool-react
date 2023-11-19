import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import DataviewList from './DataviewList';
import { Context } from '../../context/context';
import {
  mockDataviewListData,
  mockDetailsData,
  mockSearchString,
} from '../../mocks/mockData';
import { BrowserRouter } from 'react-router-dom';

const onChange = vi.fn();

describe('DataviewList tests', () => {
  it('Has 3 items', () => {
    render(
      <BrowserRouter>
        <Context.Provider
          value={{
            searchValue: mockSearchString,
            getSearchValue: onChange,
            detailsId: '1',
            getDetailsData: onChange,
          }}
        >
          <DataviewList />
        </Context.Provider>
      </BrowserRouter>
    );

    const items = screen.getAllByTestId('dataview-item');
    expect(items.length).toBe(3);
  });

  it('Show empty data message', () => {
    render(
      <BrowserRouter>
        <Context.Provider
          value={{
            searchValue: mockSearchString,
            getSearchValue: onChange,
            detailsId: '1',
            getDetailsData: onChange,
          }}
        >
          <DataviewList />
        </Context.Provider>
      </BrowserRouter>
    );

    const message = screen.getByText('There is no results for this search');
    expect(message).toBeInTheDocument();
  });
});
