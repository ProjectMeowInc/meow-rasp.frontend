export interface IBaseErrorResponse {
    status: string
    data: {
        message: string
        error_type: string
    }
    error: string
}