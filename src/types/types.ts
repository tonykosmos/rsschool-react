import { ReactNode } from 'react';
import { ApiResponse, Person } from '../Components/DataviewItem/types';

export interface AppState {
  data: Person[];
  isLoading: boolean;
  hasError: boolean;
}

export interface queryContext {
  query: {
    search: string;
    page: string;
  };
}

export interface LayoutProps {
  data: {
    cards: ApiResponse;
    cardDetails?: Person;
  };
  children?: ReactNode;
}
