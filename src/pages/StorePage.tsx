import React from 'react';
import { useGetAllStoresQuery } from 'store/apis/branchApi';

export default function StorePage() {
  const { data: stores, error, isLoading } = useGetAllStoresQuery();
  // eslint-disable-next-line no-nested-ternary
  return isLoading ? (
    <h1>Loading</h1>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      {stores?.map((store) => (
        <div key={store._id}>
          <span>{store._id}</span> <span>{store.name}</span> <span>{store.fullName}</span>
        </div>
      ))}
    </div>
  );
}
