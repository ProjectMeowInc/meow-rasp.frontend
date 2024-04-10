import { useAppSelector } from "../../../store.ts"

export const useInput = () => {
    const errors = useAppSelector((state) => state.authSlice.errors)

    const getError = (field: string) => {
        const error = errors.filter((error) => error.field === field)

        if (error.length > 0) {
            return error[0].message
        }

        return ""
    }

    return {
        getError,
    }
}
