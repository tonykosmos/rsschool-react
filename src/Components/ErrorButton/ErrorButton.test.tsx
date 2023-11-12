import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import ErrorButton from './ErrorButton';

describe('Error button render test', () => {
  it('Error boundary render', () => {
    render(
      <BrowserRouter>
        <ErrorButton />
      </BrowserRouter>
    );
  });
});
