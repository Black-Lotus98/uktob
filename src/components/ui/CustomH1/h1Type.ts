import { HTMLAttributes, ReactNode } from "react"

export type H1Type = {
    children?: ReactNode
    className?: string
} & HTMLAttributes<HTMLHeadingElement>