export interface SearchProps {
  updateData(value: string, apiUrl: string): void;
  updateLoadingStatus(status: boolean): void;
  disabled: boolean;
}

export interface SearchState {
  searchValue: string;
}
