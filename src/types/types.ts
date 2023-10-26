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
  value: string;
}

export interface SearchState {
  searchValue: string;
}

export interface AppState {
  data: Person[];
  isLoading: boolean;
  hasError: boolean;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

export interface ErrorButtonProps {
  error: Error | null;
}
