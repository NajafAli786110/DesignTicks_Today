"use client"

import { IoIosArrowForward } from 'react-icons/io';
import Link from "next/link";
import { useEffect, useState } from 'react';
import { fetchCaseStudies } from '../Api Fetch Data/OurWorkContainer';

const OurWork = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const extractedData = await fetchCaseStudies();
      setData(extractedData);
    }

    fetchData();
  }, []);

  const firstRowData = data.slice(0, 3);
  const secondRowData = data.slice(3, 6);

  return (
    <>
      <div className="flex flex-col gap-8 w-[90%]">
        <h2 className="flex items-center gap-5 regular-30 poppins-font"><hr className="w-20 pt-1 rounded bg-black-80 sm:w-10  " /> Our Work</h2>
        <div className="Case_studies flexCenter gap-12">
          <div>
            {firstRowData.map((work, index) => (
              <div key={index} className="our-portfolio flex flex-col gap-2 mb-16 ">
                <img src={work.imageUrl} alt={work.title} width={700} />
                <h3 className="regular-38 poppins-font">{work.title}</h3>
                <p className="regular-18 text-black-80">{work.Bread_Crump}</p>
              </div>
            ))}
          </div>

          <div className="mt-32 portfolio-outer-container">
            {secondRowData.map((work, index) => (
              <div key={index} className="our-portfolio flex flex-col gap-2 mb-16">
                <img src={work.imageUrl} alt={work.title} width={700} />
                <h3 className="regular-38 poppins-font">{work.title}</h3>
                <p className="regular-18">{work.Bread_Crump}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flexCenter">
          <Link href="/contact" className='flex items-center gap-2 regular-36 poppins-font text-orange-50'>View Projects <IoIosArrowForward className='regular-24' /> </Link>
        </div>
      </div>
    </>
  );
};

export default OurWork;
