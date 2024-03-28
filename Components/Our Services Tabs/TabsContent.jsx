import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const TabsContent = () => {
    const ServicesTitle = ['Wordpress', 'Wix', 'Shopify', 'Headless CMS'];
    const ServicesContent = [
        {
            imgURL: "/Wordpress tab Image.png",
            description: "Our websites aren’t just visually appealing – they’re functional, user-friendly, and optimized for all devices."
        },
        {
            imgURL: "/Wordpress tab Image.png",
            description: "Our websites aren’t just visually appealing – they’re functional, user-friendly, and optimized for all devices."
        },
        {
            imgURL: "/Wordpress tab Image.png",
            description: "Our websites aren’t just visually appealing – they’re functional, user-friendly, and optimized for all devices."
        },
        {
            imgURL: "/Wordpress tab Image.png",
            description: "Our websites aren’t just visually appealing – they’re functional, user-friendly, and optimized for all devices."
        },
    ]
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='main-dasboard-TabsContent w-full py-20'
        >
            <div className="tab-buttons w-full flex gap-24">
                {ServicesContent.map((service, index) => (
                    <div key={index} style={{ display: activeTab === `tab${index + 1}` ? 'block' : 'none' }} className='w-full '>
                        <Image src={service.imgURL} width={525} height={382} alt='Service Image showing service which is give an image source for your mind'/>
                        <p className='mb-6'>{service.description}</p>
                        <Link href="/" className='regular-18 tab-button'>Learn More</Link>
                    </div>
                ))}
                <div className="buttons flex flex-col justify-between w-full">
                    {ServicesTitle.map((title, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(`tab${index + 1}`)}
                            className={`regular-36 poppins-font tabs-bottom-border w-full pb-4 ${activeTab === `tab${index + 1}` ? 'active text-gradient' : ' '}`}
                            style={{ textAlign: 'left' }}
                        >
                            {title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabsContent;