"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';


// Add the styles directly in your component
const styles = `
  .swiper-pagination {
    display: flex;
    justify-content: flex-end;
    gap: 40px;
    padding:0px 30px 30px 0px;
  }

  .swiper-pagination-bullet {
    width: 0px;
    font-size:25px;
    color:black;
    font-family:'Poppins';
  } 

  .swiper-pagination-bullet-active {
    color:black !important;
    font-size: 25px;
  }
`;

export default function ReviewSlider() {
  const pagination = {
    e1: 'text-gradient',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' ">' + "0" + (index + 1) + '</span>';
    },
  };

  return (
    <section className='w-[90%] flex flex-col gap-32 client-review-sec'>
      <div className='flex flex-col gap-6 w-1/2 client-review-inner'>
        <h2 className="flex items-center gap-5 regular-30 poppins-font"><hr className="w-20 pt-1 rounded bg-black-80" /> Testimonials</h2>
        <p className='regular-24 poppins-font'>Our work speaks for itself, but it&apos;s always rewarding to hear how we&apos;ve made a difference in our clients&apos; journeys.</p>
      </div>
      <style jsx>{styles}</style>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        slidesPerView={2}
        style={{ paddingBottom: '100px', cursor: "pointer" }}
        autoplay={{ delay: 3000 }}
        className="mySwiper flex flex-wrap w-10/12"
        breakpoints={{
          // when window width is >= 768px (desktop)
          1000: {
            slidesPerView: 2,
            spaceBetween: 150,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          320: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
          280: {
            spaceBetween: 0,
            slidesPerView: 1,
          }
        }}
      >
        <SwiperSlide style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className='flex flex-col gap-4'>
            <Image src="/Rating.png" height="18" width="100" alt='Our Ratings shows you build honesty with you'/>
            <p className='regular-19'>&quot;Very good with communication, friendly and professional. Something juuuust off of what I wanted&lsquo; no problems and it got sorted in a flash. Very good eye for complex design as well.&quot;</p>
          </div>
          <h4 className='regular-28 poppins-font'>Ysenis Lûfengrad</h4>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className='flex flex-col gap-4'>
            <Image src="/Rating.png" height="18" width="100" alt='Our Ratings shows you build honesty with you'/>
            <p className='regular-19'>&quot;Very good with communication, friendly and professional. Something juuuust off of what I wanted&lsquo; no problems and it got sorted in a flash. Very good eye for complex design as well.&quot;</p>
          </div>
          <h4 className='regular-28 poppins-font'>Ysenis Lûfengrad</h4>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className='flex flex-col gap-4'>
            <Image src="/Rating.png" height="18" width="100" alt='Our Ratings shows you build honesty with you'/>
            <p className='regular-19'>&quot;Very good with communication, friendly and professional. Something juuuust off of what I wanted&lsquo; no problems and it got sorted in a flash. Very good eye for complex design as well.&quot;</p>
          </div>
          <h4 className='regular-28 poppins-font'>Ysenis Lûfengrad</h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
