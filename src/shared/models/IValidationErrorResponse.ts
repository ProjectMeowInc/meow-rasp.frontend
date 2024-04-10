export interface IValidationErrorResponse {
    status: string
    data: {
        error_type: string
        errors: {
            field: string
            message: string
        }[]
        message: string
    }
    error: string
}

