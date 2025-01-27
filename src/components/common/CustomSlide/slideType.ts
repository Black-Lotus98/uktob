import { StaticImageData } from "next/image";
import { HTMLAttributes, ReactNode } from "react";

export type SlideType = {
    children?: ReactNode
    className?: string
} & HTMLAttributes<HTMLElement>