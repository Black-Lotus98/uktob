import React from 'react'
import CustomSlider from '../common/CustomSlider'
import { Settings } from 'react-slick'
import CustomSlide from '../common/CustomSlide'
import Image, { StaticImageData } from 'next/image'
import CustomSection from '../common/CustomSection'

type Props = {
  sectionOne: string
  sectionTwo: string
  image?: StaticImageData
}

const AnimatedTitle = ({ sectionOne, sectionTwo, image }: Props) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 3,
    speed: 15000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    draggable: true,
    variableWidth: true,
  };
  return (
    <CustomSection background="white">
      <CustomSlider className='w-full ' settings={settings}>
        <CustomSlide>
          <div className="flex ">
            <span className='rtl:font-amiri text-custom-48 laptopS:text-custom-70 font-serif uppercase '>{sectionOne}</span>
          </div>
        </CustomSlide>
        <CustomSlide>
          <div className="flex ">
            <Image className='laptopS:h-[7.1rem] w-[4.375rem] tabletM:w-[8.9375rem] h-[4.375rem]' src={image || ""} width={143} height={147} alt="Everyday Pieces" />
          </div>
        </CustomSlide>
        <CustomSlide>
          <div className="flex ">
            <span className='rtl:font-amiri text-custom-48 laptopS:text-custom-70 text-primary font-serif uppercase'>{sectionTwo}</span>
          </div>
        </CustomSlide>


      </CustomSlider>
    </CustomSection>
  )
}

export default AnimatedTitle