import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

describe('DataviewList tests', () => {
  it('Error boundary render', () => {
    render(
      <BrowserRouter>
        <ErrorBoundary />
      </BrowserRouter>
    );
  });
});
