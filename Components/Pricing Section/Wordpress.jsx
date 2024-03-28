import React from 'react'

export default function Wordpress() {
    const PricingData = [
        {
            Title: 'Wordpress implementation',
            para: 'The concept will be developed by our team on wordpress.',
            duration: '2-3 weeks',
            pricing: '$3,000',
        },
        {
            Title: 'Branding',
            para: 'The concept will be developed by our team on wordpress.',
            duration: '3-5 Days',
            pricing: '$1,500',
        },
        {
            Title: 'Extended concept',
            para: 'The concept will be developed by our team on wordpress.',
            duration: '3-5 Days',
            pricing: '$1,500',
        },
        {
            Title: 'Hero illustration',
            para: 'The concept will be developed by our team on wordpress.',
            duration: '3-5 Days',
            pricing: '$1,500',
        },
        {
            Title: 'Graphics',
            para: 'The concept will be developed by our team on wordpress.',
            duration: '3-5 Days',
            pricing: '$1,500',
        },
        {
            Title: 'Dark/Light theme',
            para: 'The concept will be developed by our team on wordpress.',
            duration: '3-5 Days',
            pricing: '$1,500',
        }

    ]
    const PricingDataOne = PricingData.slice(0, 3);
    const PricingDataTwo = PricingData.slice(3, 6);
    return (

        <div className="pricing_section">
            <div className="pricingColumn">
                {PricingDataOne.map((price, index) => (
                    <div className='pricing_Card w-full' key={index}>
                        <div className="pricing_Info w-full flex">
                            <h3 className='regular-24 text-black-100 poppins-font'>{price.Title}</h3>
                            <p className='poppins-font'>{price.para}</p>
                        </div>
                        <div className="Pricing_Cta w-full">
                            <div className="pricing-duration">
                                <p className='text-black-100 regular-20'>{price.duration}</p>
                                <p className='text-black-100 regular-20'>{price.pricing}</p>
                            </div>
                            <button className='pricing_Cta_Btn text-black-100 regular-24'>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pricingColumn">
                {PricingDataTwo.map((price, index) => (
                    <div className='pricing_Card w-full' key={index}>
                        <div className="pricing_Info w-full flex">
                            <h3 className='regular-24 text-black-100 poppins-font'>{price.Title}</h3>
                            <p className='poppins-font'>{price.para}</p>
                        </div>
                        <div className="Pricing_Cta w-full">
                            <div className="pricing-duration">
                                <p className='text-black-100 regular-20'>{price.duration}</p>
                                <p className='text-black-100 regular-20'>{price.pricing}</p>
                            </div>
                            <button className='pricing_Cta_Btn text-black-100 regular-24'>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
