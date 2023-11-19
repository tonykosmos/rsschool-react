import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import DataviewList from './DataviewList';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store';
import { Provider } from 'react-redux';

describe('DataviewList tests', () => {
  it('Should show load spinnew while loading data', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <DataviewList />
        </Provider>
      </BrowserRouter>
    );

    const loadSpinner = await screen.findByTestId('load-spinner');
    expect(loadSpinner).toBeInTheDocument();
  });
});
