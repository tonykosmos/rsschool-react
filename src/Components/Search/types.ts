export interface SearchProps {
  updateData(value: string, apiUrl: string): void;
  updateLoadingStatus(status: boolean): void;
  disabled: boolean;
  value: string;
}

export interface SearchState {
  searchValue: string;
}
