import React from 'react'
import { SlideType } from './slideType'
import { cn } from '@/utilities/functions'

const CustomSlide = ({ children, className, ...props }: SlideType) => {
    const containerClasses = cn(
        "flex w-full px-2",
        className
    )
    return (
        <div className={containerClasses}>
            {children}
        </div>
    )
}

export default CustomSlide