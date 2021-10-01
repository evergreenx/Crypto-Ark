import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "2f56c197d5mshf779d2fec591204p1bcbffjsn24d155b82ae2",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({searchTerm , count}) => createRequest(`/search?q=${searchTerm}&count=${count}`),
    }),
  }),
});

export const { useGetCryptosNewsQuery } = cryptoNewsApi;
