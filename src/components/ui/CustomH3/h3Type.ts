import { HTMLAttributes, ReactNode } from "react"

export type H3Type = {
    children?: ReactNode
    className?: string
} & HTMLAttributes<HTMLHeadingElement>