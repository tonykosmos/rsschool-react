import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Search from './Search';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../../context/context';
import {
  mockDataviewListData,
  mockDetailsData,
  mockSearchString,
} from '../../mocks/mockData';
import AppContainer from '../../pages/AppContainer';

const onChange = vi.fn();

describe('Search component tests', () => {
  it('Clicking the Search button saves the entered value to the local storage', () => {
    render(
      <BrowserRouter>
        <Context.Provider
          value={{
            searchValue: 'Luke',
            getSearchValue: onChange,
            detailsData: mockDetailsData,
            data: mockDataviewListData,
            getDetailsData: onChange,
          }}
        >
          <Search
            updateData={onChange}
            updateLoadingStatus={onChange}
            disabled={false}
          />
        </Context.Provider>
      </BrowserRouter>
    );

    const inputButton: HTMLButtonElement = screen.getByTestId('search-btn');

    fireEvent.click(inputButton);
    expect(localStorage.getItem('searchValue')).toBe('Luke');
  });

  it('Retrieves the value from the local storage upon mounting', () => {
    localStorage.setItem('searchValue', 'Luke');

    render(
      <BrowserRouter>
        <Context.Provider
          value={{
            searchValue: localStorage.getItem('searchValue') as string,
            getSearchValue: onChange,
            detailsData: mockDetailsData,
            data: mockDataviewListData,
            getDetailsData: onChange,
          }}
        >
          <Search
            updateData={onChange}
            updateLoadingStatus={onChange}
            disabled={false}
          />
        </Context.Provider>
      </BrowserRouter>
    );

    const input: HTMLInputElement = screen.getByTestId('search-input');

    expect(input.value).toBe('Luke');
  });
});
