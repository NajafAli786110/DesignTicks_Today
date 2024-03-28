import React from 'react'

const About = () => {
  return (
    <>
    <div className="about-us w-[90%] flex flex-col gap-36">
        <p className='about-us-para regular-36 poppins-font w-1/2'>At Design Ticks, we're more than just a design agency. We are a team of dreamers and doers, passionate about bringing your brand's vision to life. Based in Sheridan, WY we've assisted countless businesses and entrepreneurs ensuring <span className='text-primary-10'>they shine brightly in the digital realm.</span></p>
        <div className="features w-full flex justify-between items-center gap-28">
            <div className="icon-box flex flex-col gap-4">
                <h3 className="number-increase text-gradient regular-124">700+</h3>
                <hr className='w-full h-1 bg-black-80 linehorizatal'/>
                <p className='regular-48 poppins-font text-black-90'>Projects Completed So Far</p>
            </div>
            <div className="icon-box flex flex-col gap-4">
                <h3 className="number-increase text-gradient regular-124">8</h3>
                <hr className='w-full h-1 bg-black-80 linehorizatal'/>
                <p className='regular-48 poppins-font text-black-90'>Years of Collective Experience</p>
            </div>
            <div className="icon-box flex flex-col gap-4">
                <h3 className="number-increase text-gradient regular-124">4.8</h3>
                <hr className='w-full h-1 bg-black-80 linehorizatal'/>
                <p className='regular-48 poppins-font text-black-90'>Average Rating
we receive</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default About;