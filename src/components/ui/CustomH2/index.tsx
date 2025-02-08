import React from 'react'
import { H2Type } from './h2Type'
import { cn } from '@/utilities/functions'

const CustomH2 = ({ children, className, ...props }: H2Type) => {
    const classes = cn(
        `text-custom-24 tabletS:text-custom-50 uppercase tracking-[.5rem] rtl:tracking-[0rem]`,
        className
    )
    return (
        <h2 className={classes} {...props}>{children}</h2>
    )
}

export default CustomH2