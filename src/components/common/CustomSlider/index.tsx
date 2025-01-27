'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderType } from './sliderType';
import { cn } from '@/utilities/functions';


const CustomSlider = ({ children, className, settings, ...props }: SliderType) => {
    const classes = cn(
        `w-[83.5rem] h-full`,
        className
    )
    return (
        <div className={classes} {...props}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}

export default CustomSlider