import { cn } from '@/utilities/functions'
import React from 'react'

interface Props {
  children?: React.ReactNode
  className?: string
}
const CustomFeatureContainer = ({ children, className }: Props) => {

  return (
    <div className={cn("flex gap-8 group mx-44 flex-col laptopS:flex-row", className)}>
      {children}
    </div>
  )
}

export default CustomFeatureContainer