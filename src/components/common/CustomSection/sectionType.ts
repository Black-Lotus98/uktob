import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export type SectionType = {
    background?: "primary" | "black" | "white" | "secondary",
    className?: string,
    children?: ReactNode,
} & HTMLAttributes<HTMLElement>