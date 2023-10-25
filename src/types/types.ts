export interface Person {
  name: string;
  mass: string;
  height: string;
  birth_year: string;
  hair_color: string;
}

export interface SearchProps {
  sendQuery(value: string): void;
  disabled: boolean;
}

export interface SearchState {
  searchValue: string;
}

export interface AppState {
  data: Person[];
  isLoading: boolean;
}
