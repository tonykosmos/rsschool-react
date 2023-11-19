import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import DataviewItem from './DataviewItem';
import { Context } from '../../context/context';
import { mockDataviewListData, mockSearchString } from '../../mocks/mockData';
import { BrowserRouter } from 'react-router-dom';

const onChange = vi.fn();
const onDetailsOpen = vi.fn();

describe('Card component tests', () => {
  it('Renders the relevant card data', () => {
    render(
      <BrowserRouter>
        <Context.Provider
          value={{
            searchValue: mockSearchString,
            detailsId: '1',
            getSearchValue: onChange,
            getDetailsData: onChange,
          }}
        >
          <DataviewItem
            key={mockDataviewListData[0].name}
            name={mockDataviewListData[0].name}
            height={mockDataviewListData[0].height}
            mass={mockDataviewListData[0].mass}
            hair_color={mockDataviewListData[0].hair_color}
            birth_year={mockDataviewListData[0].birth_year}
            url={mockDataviewListData[0].url}
          />
        </Context.Provider>
      </BrowserRouter>
    );

    const nameText = screen.getByText(`Name: ${mockDataviewListData[0].name}`);
    expect(nameText).toBeInTheDocument();
  });

  it('Сard opens a detailed card component by click on details button', async () => {
    render(
      <BrowserRouter>
        <Context.Provider
          value={{
            searchValue: mockSearchString,
            detailsId: '1',
            getSearchValue: onChange,
            getDetailsData: onChange,
          }}
        >
          <DataviewItem
            key={mockDataviewListData[0].name}
            name={mockDataviewListData[0].name}
            height={mockDataviewListData[0].height}
            mass={mockDataviewListData[0].mass}
            hair_color={mockDataviewListData[0].hair_color}
            birth_year={mockDataviewListData[0].birth_year}
            url={mockDataviewListData[0].url}
          />
        </Context.Provider>
      </BrowserRouter>
    );

    const button = screen.getByTestId('open-details-btn');
    fireEvent.click(button);
    expect(location.pathname).toBe('/details');
  });

  it('clicking triggers an additional API call to fetch detailed information', async () => {
    render(
      <BrowserRouter>
        <Context.Provider
          value={{
            searchValue: mockSearchString,
            detailsId: '1',
            getSearchValue: onChange,
            getDetailsData: onDetailsOpen,
          }}
        >
          <DataviewItem
            key={mockDataviewListData[0].name}
            name={mockDataviewListData[0].name}
            height={mockDataviewListData[0].height}
            mass={mockDataviewListData[0].mass}
            hair_color={mockDataviewListData[0].hair_color}
            birth_year={mockDataviewListData[0].birth_year}
            url={mockDataviewListData[0].url}
          />
        </Context.Provider>
      </BrowserRouter>
    );

    const button = screen.getByTestId('open-details-btn');
    fireEvent.click(button);
    expect(onDetailsOpen).toHaveBeenCalled();
  });
});
