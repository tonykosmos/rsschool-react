import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import DataviewList from './DataviewList';
import { Context } from '../../context/context';
import { mockDataviewListData, mockSearchString } from '../../mocks/mockData';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { setCardsData } from '../../store/searchSlice';

describe('DataviewList tests', () => {
  // it('Should show 3 items', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/']}>
  //       <Provider store={store}>
  //         <DataviewList />
  //       </Provider>
  //     </MemoryRouter>
  //   );

  //   store.dispatch(
  //     setCardsData({
  //       count: 3,
  //       results: mockDataviewListData,
  //       next: null,
  //       previous: null,
  //     })
  //   );

  //   const items = await screen.findAllByTestId('dataview-item');
  //   expect(items.length).toBe(3);
  // });

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
