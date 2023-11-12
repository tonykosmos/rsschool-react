import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage404 from './ErrorPage404';

describe('404 page tests', () => {
  it('404 page is displayed when navigating to an invalid route', () => {
    render(
      <BrowserRouter>
        <ErrorPage404 />
      </BrowserRouter>
    );

    const errorPage = screen.getByTestId('error-page');

    expect(errorPage).toBeInTheDocument();
  });
});
