export interface SearchProps {
  updateLoadingStatus(status: boolean): void;
  disabled: boolean;
}

export interface SearchState {
  searchValue: string;
}
