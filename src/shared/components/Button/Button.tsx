import { FC, PropsWithChildren } from "react"
import classes from "./button.module.css"

export interface IButtonProps {
    onClick?: () => void
    styles?: {
        width?: string
        margin?: number
    }
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({ styles, onClick, children }) => {
    return (
        <button className={classes.button} onClick={onClick} style={styles}>
            {children}
        </button>
    )
}

export default Button
