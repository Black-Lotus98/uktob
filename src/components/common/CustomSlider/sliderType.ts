import { ReactNode } from "react";
import Slider, { Settings } from "react-slick";

export type SliderType = {
    className?: string,
    children?: ReactNode,
    settings?: Settings
}