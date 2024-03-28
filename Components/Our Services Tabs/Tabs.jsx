"use client"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WebDesign from './WebDesign';
import GraphicDesign from './GraphicDesign';
import AppDevelopment from './AppDevelopment';
import TabsContent from './TabsContent';

const Tabs = () => {
  const TabsNames = ['Web Design & Development', 'Graphic Design', 'App Development'];
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
      <div className="tab-buttons flex flex-col w-full gap-10">
        {TabsNames.map((tabName, index) => (
          <React.Fragment key={index}>
            <button
              onClick={() => handleTabClick(`tab${index + 1}`)}
              className={`tabs-main-title regular-64 flex pb-8 tabs-bottom-border ${activeTab === `tab${index + 1}` ? 'active text-gradient' : ''}`}
              style={{ textAlign: 'left'}}
            >
              <sup className={activeTab === `tab${index + 1}` ? 'active text-gradient regular-28' : 'text-black-90 regular-28'} style={{ marginRight: '30px', paddingBottom: '20px' }}>
                {`0${index + 1}`}
              </sup>
              {tabName}
            </button>
            {activeTab === `tab${index + 1}` && (
              <div>
                {index === 0 && <TabsContent />}
                {index === 1 && <TabsContent />}
                {index === 2 && <TabsContent />}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Tabs;