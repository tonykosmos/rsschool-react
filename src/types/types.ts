import { Person } from '../Components/DataviewItem/types';

export interface AppState {
  data: Person[];
  isLoading: boolean;
  hasError: boolean;
}
