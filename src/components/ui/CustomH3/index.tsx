import React from 'react'
import { H3Type } from './h3Type'
import { cn } from '@/utilities/functions'

const CustomH3 = ({ children, className, ...props }: H3Type) => {
    const classes = cn(
        `text-custom-34`,
        className
    )
    return (
        <h3 className={classes} {...props}>{children}</h3>
    )
}

export default CustomH3