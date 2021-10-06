import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  IGetAllBranchResponse,
  IGetBranchResponse,
} from 'shared/interfaces/response/branch.response';
import { IAddBranchRequest, IUpdateBranchRequest } from 'shared/validation/interfaces/branch';

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getAllStores: builder.query<IGetAllBranchResponse[], void>({
      query: () => '/branches',
      transformResponse: (rawResult: { data: IGetAllBranchResponse[] }) => rawResult.data,
    }),
    getStoreById: builder.query<IGetBranchResponse, string>({
      query: (id) => `/branches/${id}`,
    }),
    createStore: builder.mutation<{}, IAddBranchRequest>({
      query: (branch) => ({
        url: '/branches',
        method: 'POST',
        body: branch,
      }),
    }),
    updateStore: builder.mutation<{}, IUpdateBranchRequest & { _id: string }>({
      query: ({ _id, ...branch }) => ({
        url: `/branches/${_id}`,
        method: 'PUT',
        body: branch,
      }),
    }),
  }),
});

export const {
  useCreateStoreMutation,
  useGetAllStoresQuery,
  useGetStoreByIdQuery,
  useUpdateStoreMutation,
} = storeApi;
