import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Pagination from './Pagination';
import { BrowserRouter } from 'react-router-dom';

const onChange = vi.fn();

describe('Card component tests', () => {
  it('Component updates URL query parameter when page changes', () => {
    render(
      <BrowserRouter>
        <Pagination
          pageCount={80}
          changePage={onChange}
          nextPage={'https://swapi.dev/api/people/?search=&page=2'}
          hidden={false}
        />
      </BrowserRouter>
    );

    const button = screen.getByTestId('open-next-page-btn');
    fireEvent.click(button);
    expect(location.search).toBe('?search=&page=2');
  });
});
