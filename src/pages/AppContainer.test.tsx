import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './AppContainer';

describe('App container render test', () => {
  it('App container render', () => {
    render(
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    );
  });
});
