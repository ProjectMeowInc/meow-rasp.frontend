import { FormEvent, useEffect, useState } from "react"
import { useRegistrationMutation } from "../../../entities/Auth/api/authApi.ts"
import { AlertService } from "../../../shared/services/AlertService.ts"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../store.ts"
import { resetErrors, setErrors } from "../../../entities/Auth/slice/authSlice.ts"
import { IOnChangeEvent } from "../../../shared/events/IOnChangeEvent.ts"

export interface IRequestData {
    login?: string
    password?: string
}

export const useRegistrationPage = () => {
    const [requestData, setRequestData] = useState<IRequestData>()
    const [registration, { error: registrationError, isSuccess }] = useRegistrationMutation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isSuccess) {
            AlertService.success("Вы успешно зарегистрировались. Теперь можете авторизоваться")
            navigate("/login")
        }
    }, [isSuccess, navigate])

    useEffect(() => {
        if (registrationError && "data" in registrationError) {
            if ("errors" in registrationError.data) {
                dispatch(setErrors(registrationError.data.errors))
            }

            return AlertService.error("Ошибка регистрации")
        }
    }, [registrationError, dispatch])

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

        await registration({
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
