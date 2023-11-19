import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Search from './Search';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';

const onChange = vi.fn();

describe('Search component tests', () => {
  it('Clicking the Search button saves the entered value to the local storage', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Search updateLoadingStatus={onChange} disabled={false} />
        </Provider>
      </BrowserRouter>
    );

    const inputButton: HTMLButtonElement = screen.getByTestId('search-btn');
    const input: HTMLInputElement = screen.getByTestId('search-input');
    input.value = 'Luke';
    fireEvent.click(inputButton);
    expect(localStorage.getItem('searchValue')).toBe(input.value);
  });

  it('Retrieves the value from the local storage upon mounting', () => {
    localStorage.setItem('searchValue', 'Luke');

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Search updateLoadingStatus={onChange} disabled={false} />
        </Provider>
      </BrowserRouter>
    );

    const input: HTMLInputElement = screen.getByTestId('search-input');

    expect(input.value).toBe('Luke');
  });
});
