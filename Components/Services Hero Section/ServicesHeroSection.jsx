import Image from 'next/image'
import React from 'react'
import { ServicesHeroSlider } from '..'

export default function ServicesHeroSection(props) {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-20 main-heroSection overflow-hidden">
            <div className="w-[90%] services_Hero_Top flex flex-col">
                <div className="flex flex-col items-end">
                    <Image src="/Clutch Review.png" width={231} height={78} className="Clutch-Review-Img" alt='My clutch Reviews build trust with you'/>
                </div>
                <div className="flex flex-col items-center py-5">
                    <h1 className="hero-section-main-title regular-105 z-20 self-start">{props.HeroTitleOne}</h1>
                    <h1 className="regular-105 pl-28 main-hero-heading">{props.HeroTitleTwo}</h1>
                </div>
            </div>
            <div className="services_Hero_Bottom flexBetween w-full">
                <ServicesHeroSlider />
            </div>
        </div>
    )
}
