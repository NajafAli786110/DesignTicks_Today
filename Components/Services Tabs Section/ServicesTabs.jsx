"use client"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TabsContent from '../Our Services Tabs/TabsContent';
import Wordpress from '../Pricing Section/Wordpress';


export default function ServicesTabs() {
    const TabsNames = ['WordPress', 'Wix', 'Shopify', 'Headless CMS'];
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='services-tabs w-[90%] flex flex-col gap-28' style={{ padding: '30px 0px' }}>
            <div className='whatyouthink'>
                <h2 className="flex items-center gap-5 regular-30 poppins-font">
                    <hr className="w-20 pt-1 rounded bg-black-80" /> Services
                </h2>
            </div>
            <div className="TabsTitleWithContent flex flex-col gap-10">
                <div className="services_Tabs flex justify-end">
                    <div className="tab-buttons flex flex-col w-[80%] gap-10">
                        {TabsNames.map((tabName, index) => (
                            <div className="Tabs_Btn flex gap-14" key={index}>
                                <sup className={activeTab === `tab${index + 1}` ? 'active text-gradient regular-28' : 'text-black-90 regular-28'} style={{ paddingBottom: '20px' }}>
                                    {`0${index + 1}`}
                                </sup>
                                <button
                                    key={index}
                                    onClick={() => handleTabClick(`tab${index + 1}`)}
                                    className={`tabs-main-title regular-64 flex py-2 px-10 w-full ${activeTab === `tab${index + 1}` ? 'active serviceBg' : ''}`}
                                    style={{ textAlign: 'left' }}
                                >
                                    {tabName}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Render all TabsContent after all tabs */}
                {TabsNames.map((tabName, index) => (
                    <div key={`content${index}`}>
                        {activeTab === `tab${index + 1}` && (
                            <Wordpress />
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}
