import { FC } from "react"
import { IOnChangeEvent } from "../../events/IOnChangeEvent.ts"
import classes from "./input.module.css"
import { useInput } from "./useInput.ts"

export interface IInputProps {
    placeholder?: string
    name: string
    required?: boolean
    type?: "text" | "password" | "email"
    onChange?: (data: IOnChangeEvent) => void
    styles?: {
        width?: string
        margin?: number
    }
}

const Input: FC<IInputProps> = ({ placeholder, required, type, onChange, styles, name }) => {
    const { getError } = useInput()

    return (
        <>
            <input
                required={required}
                className={classes.input}
                type={type}
                onChange={(event) =>
                    onChange?.call(null, {
                        fieldName: event.target.name,
                        fieldValue: event.target.value,
                    })
                }
                style={styles}
                placeholder={placeholder}
                name={name}
            />
            <p className={classes.error}>{getError(name)}</p>
        </>
    )
}

export default Input
