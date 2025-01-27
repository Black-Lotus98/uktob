import { HTMLAttributes, ReactNode } from "react"

export type H2Type = {
    children?: ReactNode
    className?: string
} & HTMLAttributes<HTMLHeadingElement>