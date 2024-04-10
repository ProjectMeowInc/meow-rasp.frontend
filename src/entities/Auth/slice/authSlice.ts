import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IOnChangeError } from "../../../shared/events/IOnChangeEvent.ts"

interface IInitialState {
    errors: IOnChangeError[]
}

const initialState: IInitialState = {
    errors: [],
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setErrors(state, action: PayloadAction<IOnChangeError[]>) {
            state.errors = action.payload
        },

        resetErrors() {
            return initialState
        },
    },
})

export const { setErrors, resetErrors } = authSlice.actions
