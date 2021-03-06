import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const crytoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "2f56c197d5mshf779d2fec591204p1bcbffjsn24d155b82ae2",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = ((url) => ({ url, headers: crytoApiHeaders }) ) ;

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  }),
});

export const { useGetCryptosQuery , useGetCryptoDetailsQuery } = cryptoApi;
