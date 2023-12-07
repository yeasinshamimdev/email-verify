import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const RtkQueryService = createApi({
  reducerPath: 'emailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  tagTypes: ['EmailVerify'],
  endpoints: () => ({}),
});

export default RtkQueryService;
