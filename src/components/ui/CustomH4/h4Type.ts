import { HTMLAttributes, ReactNode } from "react"

export type H4Type = {
    children?: ReactNode
    className?: string
} & HTMLAttributes<HTMLHeadingElement>