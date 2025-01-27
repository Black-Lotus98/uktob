import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonType = {
    variant?: "solid" | "outlined",
    color?: "primary" | "black" | "white",
    className?: string,
    children?: ReactNode,
} & ButtonHTMLAttributes<HTMLButtonElement>