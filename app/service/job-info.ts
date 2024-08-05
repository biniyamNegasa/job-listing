import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "../JobList/JobList";

export const opportunitiesApi = createApi({
    reducerPath: "opportunities",
    baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com" }),

    endpoints: (builder) => ({
        getAllOpportunities: builder.query({
            query: () => "/opportunities/search",
        }),
        getOpportunityById: builder.query({
            query: (id) => `/opportunities/${id}`
        })
    }),
})



export const { useGetAllOpportunitiesQuery, useGetOpportunityByIdQuery } = opportunitiesApi;