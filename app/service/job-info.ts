import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "../JobList/JobList";
import { url } from "inspector";
import FormType from "../types/FormType";
import VerifyEmailType from "../types/VerifyEmailType";

export const opportunitiesApi = createApi({
    reducerPath: "opportunities",
    baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/"}),

    endpoints: (builder) => ({
        getAllOpportunities: builder.query({
            query: () => "opportunities/search",
        }),
        getOpportunityById: builder.query({
            query: (id) => `opportunities/${id}`
        }), 
        signUpUser: builder.mutation({
            query: (data: FormType) => ({
                url: '/signup',
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    confirmPassword: data.confirmPassword,
                    role: "user"
                }   
            })
        }),
        signInUser: builder.mutation({
            query: (data: FormType) => ({
                url: '/signin',
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    email: data.email,
                    password: data.password,
                }   
            })
        }),
        verifyEmail: builder.mutation({
            query: (data: VerifyEmailType) => ({
                url: '/verify-email',
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    email: data.email,
                    otp: data.otp,
                }   
            })
        }),

    }),
})



export const { useGetAllOpportunitiesQuery, useGetOpportunityByIdQuery, useSignInUserMutation, useSignUpUserMutation, useVerifyEmailMutation } = opportunitiesApi;