import Input from "../../../shared/components/Input/Input.tsx"
import Button from "../../../shared/components/Button/Button.tsx"
import classes from "./form.module.css"
import { IOnChangeEvent } from "../../../shared/events/IOnChangeEvent.ts"
import { FC, FormEvent } from "react"

interface IFormProps {
    changeHandler: (data: IOnChangeEvent) => void
    submitHandler: (event: FormEvent) => void
}

const Form: FC<IFormProps> = ({ changeHandler, submitHandler }) => {
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                onChange={changeHandler}
                required={true}
                name={"login"}
                placeholder={"Введите пароль"}
                type={"text"}
            />

            <Input
                onChange={changeHandler}
                required={true}
                name={"password"}
                placeholder={"Введите пароль"}
                type={"password"}
            />

            <Button>Отправить</Button>
        </form>
    )
}

export default Form
