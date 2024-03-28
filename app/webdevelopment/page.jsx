import { About, ContactForm, OurProcess, OurClient, ServicesHeroSection, ServicesTabs } from '@/Components'
import React from 'react'

export default function webdevelopment() {
    const data = [
        {
            HeroTitle: "We create beautiful websites",
            HeroTitleSecond: "that drive business growth."
        },
        {
            ContactFormTitle: "Create your new website with us"
        }
    ]
    return (
        <section className='flexCenter flex-col gap-32 w-full py-20'>
            <ServicesHeroSection
                HeroTitleOne={data[0].HeroTitle}
                HeroTitleTwo={data[0].HeroTitleSecond}
            />
            <About />
            <ServicesTabs />
            <OurProcess />
            <div className="punch-line w-full py-[150px] bg-primary-10 flex items-center justify-center">
                <div className="w-[90%]">
                    <h2 className="regular-133 poppins-font w-full">
                        <sup className="text-white">"</sup>Your brand's journey deserves the
                        best tools and skills. Whether it's a striking logo, an engaging
                        banner, or a user-friendly website, we're here to make it happen.
                        <sub className="text-white">"</sub>
                    </h2>
                </div>
            </div>
            <OurClient />
            <ContactForm ContactFormTitle={data[1].ContactFormTitle} />
        </section>
    )
}
