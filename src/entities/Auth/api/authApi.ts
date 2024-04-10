import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_API_URL } from "../../../../consts.ts"
import { IValidationErrorResponse } from "../../../shared/models/IValidationErrorResponse.ts"
import { query } from "../../../shared/utils/query.ts"
import { IRegistrationRequest } from "./models/requests/IRegistrationRequest.ts"
import { IAuthorizationResponse } from "./models/responses/IAuthorizationResponse.ts"
import { IBaseErrorResponse } from "../../../shared/models/IBaseErrorResponse.ts"

export const baseFetchQuery = fetchBaseQuery({ baseUrl: BASE_API_URL }) as BaseQueryFn<
    string | FetchArgs,
    unknown,
    IValidationErrorResponse | IBaseErrorResponse
>

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseFetchQuery,
    endpoints: build => ({
        registration: build.mutation<void, IRegistrationRequest>({
            query: body => query("/v1/user/auth/register", "POST", false, body),
        }),

        authorization: build.mutation<IAuthorizationResponse, IRegistrationRequest>({
            query: body => query("/v1/user/auth/login", "POST", false, body),
        })
    })
})

export const {useAuthorizationMutation, useRegistrationMutation} = authApi