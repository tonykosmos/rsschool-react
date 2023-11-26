import { ReactNode } from 'react';
import { ApiResponse, Person } from '../Components/DataviewItem/types';
import DataviewList from '../Components/DataviewList/DataviewList';
import ErrorButton from '../Components/ErrorButton/ErrorButton';
import Pagination from '../Components/Pagination/Pagination';
import Search from '../Components/Search/Search';
import { store } from '../store';
import { updatePageCount } from '../store/searchSlice';
import '../styles/App.css';

export interface LayoutProps {
  data: {
    cards: ApiResponse;
    cardDetails?: Person;
  };
  children?: ReactNode;
}

export default function Layout(props: LayoutProps) {
  store.dispatch(updatePageCount(props.data.cards.count));
  return (
    <div className="App">
      <div className="content-container">
        <Search />
        <ErrorButton />
        <hr />
        <div className="flex-container space-between">
          <DataviewList cards={props.data.cards} />
          <div>{props.children}</div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}
