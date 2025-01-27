import { cn } from '@/utilities/functions'
import colorStyles from './variants'
import { ButtonType } from './buttonType'


const CustomButton = ({ children, className, color = "primary", variant = "solid", ...props }: ButtonType) => {

    const classes = cn(
        `px-6 py-4 shadow-sm hover:opacity-95 active:opacity-100 disabled:opacity-50 disabled:cursor-not-allowed
        transition duration-150 ease-in-out`,
        colorStyles[variant][color],
        className,
    )

    return (
        <button className={cn(classes)} {...props}>{children}</button>
    )
}

export default CustomButton