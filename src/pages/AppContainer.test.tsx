import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from '.';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('App container render test', () => {
  it('App container render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    );
  });
});
