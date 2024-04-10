import Form from "../UI/Form.tsx"
import classes from "./registrationPage.module.css"

import Logo from "../../../shared/icons/logo.svg?react"
import { Link } from "react-router-dom"
import { useRegistrationPage } from "./useRegistrationPage.ts"

const RegistrationPage = () => {
    const { ChangeHandler, SubmitHandler } = useRegistrationPage()

    return (
        <div className={classes.wrapper}>
            <div className={classes.left_side}></div>

            <div className={classes.right_side}>
                <div className={classes.modal}>
                    <div className={classes.modal_left_side}>
                        <Logo className={classes.logo} />
                    </div>
                    <div className={classes.modal_right_side}>
                        <h1>Регистрация</h1>
                        <Form changeHandler={ChangeHandler} submitHandler={SubmitHandler} />
                        <p>
                            Есть аккаунт?
                            <Link to={"/login"} className={classes.question}>
                                Авторизуйтесь
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage
