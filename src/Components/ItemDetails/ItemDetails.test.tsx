import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import ItemDetails from './ItemDetails';
import { mockDetailsData } from '../../mocks/mockData';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { setDetailsData } from '../../store/searchSlice';

describe('Detailed Card tests', () => {
  it('Should show loading indicator while fetching data', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ItemDetails />
        </Provider>
      </BrowserRouter>
    );

    const loadSpinner = screen.getByTestId('load-spinner');
    expect(loadSpinner).toBeInTheDocument();
  });

  it('Detailed card component correctly displays the detailed card data', async () => {
    render(
      <MemoryRouter initialEntries={['/details']}>
        <Provider store={store}>
          <ItemDetails />
        </Provider>
      </MemoryRouter>
    );

    store.dispatch(setDetailsData(mockDetailsData));

    const nameText = await screen.findByText(`Name: ${mockDetailsData.name}`);
    expect(nameText).toBeInTheDocument();
  });

  it('Clicking the close button hides the component', () => {
    render(
      <MemoryRouter initialEntries={['/details']}>
        <Provider store={store}>
          <ItemDetails />
        </Provider>
      </MemoryRouter>
    );

    store.dispatch(setDetailsData(mockDetailsData));

    const button = screen.getByTestId('details-close-btn');
    fireEvent.click(button);
    expect(location.pathname).toBe('/');
  });
});
