"use client";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { fetchClientLogos } from "../Api Fetch Data/OurClientLogoData";

const OurClient = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const extractedData = await fetchClientLogos();
      setData(extractedData);
    }

    fetchData();
  }, []);

  const firstRowData = data.slice(0, 4);
  const secondRowData = data.slice(4, 8);

  return (
    <>
      <div className="w-full py-32 bg-sectionBg-10 flex flex-col justify-center items-center our-clients">
        <div className="inner-container-custom w-[90%] flex flex-col justify-start gap-28">
          <h2 className="flex items-center gap-5 regular-30 poppins-font">
            <hr className="w-20 h-1 rounded bg-black-80" /> Clients
          </h2>
          <div className="our-client-logos flexCenter flex-col gap-28 w-full">
            <div className="firstContainerPortfolio clients-logo flexBetween px-20 w-full ">
              {firstRowData.map((logo, index) => (
                <img key={index} src={logo.imageUrl} height={88} width={250} alt={logo.title} className="client-logo-img" />
              ))}
            </div>
            <div className="clients-logo flexBetween px-20 w-full">
              {secondRowData.map((logo, index) => (
                <img key={index} src={logo.imageUrl} height={88} width={250} alt={logo.title} className="client-logo-img" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClient;
