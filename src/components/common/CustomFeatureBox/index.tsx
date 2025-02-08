import { cn } from '@/utilities/functions'
import React from 'react'

interface FeatureBoxType {
    children: React.ReactNode
    className?: string
}

const CustomFeatureBox = ({ children, className }: FeatureBoxType) => {

    return (
        <div className={cn(`text-custom-36 w-[36rem] bg-white rounded-lg 
            shadow-lg p-8 hover:shadow-2xl scale-100 hover:scale-105 
            transition duration-300 ease-in-out feature flex flex-col items-center justify-center`, className)}
        >
            {children}
        </div>
    )
}

export default CustomFeatureBox