import { Person } from '../Components/DataviewItem/types';

export interface ReactContext {
  getSearchValue: (value: string) => void;
  searchValue: string;
  detailsData: Person | null;
  data: Person[];
  getDetailsData: (url: string) => void;
}
