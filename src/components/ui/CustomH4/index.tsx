import React from 'react'
import { H4Type } from './h4Type'
import { cn } from '@/utilities/functions'

const CustomH4 = ({ children, className, ...props }: H4Type) => {
    const classes = cn(
        `text-custom-24`,
        className
    )
    return (
        <h4 className={classes} {...props}>{children}</h4>
    )
}

export default CustomH4