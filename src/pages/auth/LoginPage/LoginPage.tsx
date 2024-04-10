import classes from "./loginPage.module.css"
import Form from "../UI/Form.tsx"
import { Link } from "react-router-dom"
import Logo from "../../../shared/icons/logo.svg?react"
import { useLoginPage } from "./useLoginPage.ts"

const LoginPage = () => {
    const { ChangeHandler, SubmitHandler } = useLoginPage()

    return (
        <div className={classes.wrapper}>
            <div className={classes.left_side}></div>

            <div className={classes.right_side}>
                <div className={classes.modal}>
                    <div className={classes.modal_left_side}>
                        <Logo className={classes.logo} />
                    </div>
                    <div className={classes.modal_right_side}>
                        <h1>Авторизация</h1>
                        <Form changeHandler={ChangeHandler} submitHandler={SubmitHandler} />
                        <p>
                            Нет аккаунта?
                            <Link to={"/registration"} className={classes.question}>
                                Зарегистрируйтесь
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
