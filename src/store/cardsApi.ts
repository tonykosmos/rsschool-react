import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../constants/api';
import { ApiResponse, Person } from '../Components/DataviewItem/types';

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (build) => ({
    getCards: build.query<ApiResponse, { searchValue: string; page: number }>({
      query: ({ searchValue = '', page = '1' }) => ({
        url: '',
        params: {
          search: searchValue,
          page,
        },
      }),
    }),
    getDetails: build.query<Person, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetCardsQuery, useGetDetailsQuery } = cardsApi;
