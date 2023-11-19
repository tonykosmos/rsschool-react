import { createSlice } from '@reduxjs/toolkit';
import { ApiResponse, Person } from '../Components/DataviewItem/types';

const initialCardsData: ApiResponse = {
  count: 0,
  results: [],
  previous: '',
  next: '',
};

const initialDetailsData: Person = {
  name: '',
  mass: '',
  height: '',
  birth_year: '',
  hair_color: '',
  skin_color: '',
  gender: '',
  eye_color: '',
  created: '',
  edited: '',
  url: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
    pageCount: 0,
    currentPage: 1,
    cardsData: initialCardsData,
    detailsData: initialDetailsData,
  },
  reducers: {
    updateSearchValue(state, action) {
      state.searchValue = action.payload.searchValue;
    },
    updatePageCount(state, action) {
      state.pageCount = action.payload;
    },
    updateCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setCardsData(state, action) {
      state.cardsData = action.payload;
    },
    setDetailsData(state, action) {
      state.detailsData = action.payload;
    },
  },
});

export const {
  updateSearchValue,
  setCardsData,
  setDetailsData,
  updateCurrentPage,
  updatePageCount,
} = searchSlice.actions;

export default searchSlice.reducer;
