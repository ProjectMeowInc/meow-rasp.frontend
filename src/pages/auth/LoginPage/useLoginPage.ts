import { FormEvent, useEffect, useState } from "react"
import { useAuthorizationMutation } from "../../../entities/Auth/api/authApi.ts"
import { TokenService } from "../../../shared/services/TokenService.ts"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../store.ts"
import { resetErrors, setErrors } from "../../../entities/Auth/slice/authSlice.ts"
import { AlertService } from "../../../shared/services/AlertService.ts"
import { IOnChangeEvent } from "../../../shared/events/IOnChangeEvent.ts"

interface IRequestData {
    login?: string
    password?: string
}

export const useLoginPage = () => {
    const [requestData, setRequestData] = useState<IRequestData>()
    const [authorization, { data, error: authorizationError, isSuccess }] =
        useAuthorizationMutation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data) {
            const { access_token, refresh_token } = data

            TokenService.setAccessToken(access_token)
            TokenService.setRefreshToken(refresh_token)
        }
    }, [data])

    useEffect(() => {
        if (authorizationError && "data" in authorizationError) {
            if ("errors" in authorizationError.data) {
                dispatch(setErrors(authorizationError.data.errors))
            }

            return AlertService.error("Ошибка авторизации")
        }
    }, [authorizationError])

    useEffect(() => {
        if (isSuccess) {
            AlertService.success("Вы успешно авторизовались")
            navigate("/")
        }
    }, [isSuccess])

    const ChangeHandler = ({ fieldName, fieldValue }: IOnChangeEvent) => {
        setRequestData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue,
        }))
    }

    const SubmitHandler = async (event: FormEvent) => {
        event.preventDefault()

        if (!requestData || !requestData.login || !requestData.password) {
            return AlertService.error("Не все поля заполнены")
        }

        await authorization({
            login: requestData.login,
            password: requestData.password,
        })

        dispatch(resetErrors())
    }

    return {
        ChangeHandler,
        SubmitHandler,
    }
}
