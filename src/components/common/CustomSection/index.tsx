import { cn } from '@/utilities/functions'
import { SectionType } from './sectionType'
import colorStyles from './variants'


const CustomSection = ({ children, className, background = "primary", ...props }: SectionType) => {

    const classes = cn(
        `w-full h-full`,
        colorStyles[background],
        className,
    )

    return (
        <div className={cn(classes)} {...props}>{children}</div>
    )
}

export default CustomSection