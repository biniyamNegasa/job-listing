import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse } from "../JobList/page";
import { url } from "inspector";
import FormType from "../types/FormType";
import VerifyEmailType from "../types/VerifyEmailType";
import SignInType from "../types/SignInType";

export const opportunitiesApi = createApi({
    reducerPath: "opportunities",
    baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com"}),

    endpoints: (builder) => ({
        getAllOpportunities: builder.query({
            query: ({accessToken}) => ({
                url: '/opportunities/search',
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        }),
        getOpportunityById: builder.query({
            query: (id) => `/opportunities/${id}`
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
            query: (data: SignInType) => ({
                url: '/login',
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
        getBookmark: builder.query({
            query: ({accessToken}) => ({
                url: '/bookmarks',
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        })
        ,
        createBookmark: builder.mutation({
            query: ({id, accessToken}) => ({
                url: `/bookmarks/${id}`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            })
        }),
        deleteBookmark: builder.mutation({
            query: ({id, accessToken}) => ({
                url: `/bookmarks/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            })
        }),
    }),
})



export const { useGetAllOpportunitiesQuery, useGetOpportunityByIdQuery, 
               useSignInUserMutation, useSignUpUserMutation, 
               useVerifyEmailMutation, useCreateBookmarkMutation,
               useDeleteBookmarkMutation, useGetBookmarkQuery } = opportunitiesApi;