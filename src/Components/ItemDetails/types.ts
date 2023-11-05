import { Person } from '../DataviewItem/types';

export interface ItemDetailsProps {
  data: Person | null;
  isDetailsLoading: boolean;
}
