import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Pagination from './Pagination';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Card component tests', () => {
  it('Component updates URL query parameter when page changes', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Pagination
            nextPage={'https://swapi.dev/api/people/?search=&page=2'}
            hidden={false}
          />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByTestId('open-next-page-btn');
    fireEvent.click(button);
    expect(location.search).toBe('?search=&page=2');
  });
});
