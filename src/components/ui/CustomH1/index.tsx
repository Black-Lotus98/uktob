import React from 'react'
import { H1Type } from './h1Type'
import { cn } from '@/utilities/functions'

const CustomH1 = ({ children, className, ...props }: H1Type) => {
    const classes = cn(
        `text-custom-64`,
        className
    )
    return (
        <h1 className={classes} {...props}>{children}</h1>
    )
}

export default CustomH1