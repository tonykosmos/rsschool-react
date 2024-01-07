import { Person } from '../DataviewItem/types';

export interface SearchProps {
  updateData(data: Person[]): void;
  updateLoadingStatus(status: boolean): void;
  disabled: boolean;
  value: string;
}

export interface SearchState {
  searchValue: string;
}
