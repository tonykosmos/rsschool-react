export interface PaginationProps {
  pageCount: number;
  changePage(url?: string): void;
  previousPage?: string;
  nextPage?: string;
  hidden: boolean;
  itemsPerPage: number;
}
