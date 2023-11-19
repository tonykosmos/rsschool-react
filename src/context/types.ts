export interface ReactContext {
  getSearchValue: (value: string) => void;
  searchValue: string;
  detailsId: string;
  getDetailsData: (url: string) => void;
}
