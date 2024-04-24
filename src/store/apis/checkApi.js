import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const checkApi = createApi({
    reducerPath: 'check',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api'
    }),

    endpoints: (builder) => ({
        
        getFarmacos: builder.query({
            query: () => '/farmacos'
        }),

        getCompa: builder.query({
            query: (args) => {
                const {farma1, farma2 } = args

                return {
                    url: `/comparar-farmacos/${farma1}/${farma2}`
                }
            }
        }),

    })
})
export const { useGetFarmacosQuery, useGetCompaQuery } = checkApi;