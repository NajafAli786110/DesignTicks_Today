"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { NewSlider } from '..';

const styles = `
  .swiper-pagination {
    display: flex;
    gap: 35px;
    justify-content:start;
    position: relative;
    left: 61% !important;
    margin-top:30px;
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

export default function ServicesHeroSlider() {

    const pagination = {
        e1: 'text-gradient',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' ">' + "0" + (index + 1) + '</span>';
        },
    };
    return (
        <section className='w-full flex flex-col gap-32 client-review-sec'>
            <style jsx>{styles}</style>
            <Swiper
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                style={{ paddingBottom: '100px', cursor: "pointer" }}
                autoplay={{ delay: 3000 }}
                className="mySwiper flex flex-wrap w-full"
                breakpoints={{
                    // when window width is >= 768px (desktop)
                    1000: {
                        slidesPerView: 1,
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
                <SwiperSlide style={{ display: 'flex' }}>
                    <div className='ServicesSliderImage flex flex-col gap-4 w-[60%]'>
                        <img src="/Charmaine Sapp.png" alt="Charmaine Sapp" />
                    </div>
                    <div className="slider_content_info flex flex-col justify-between w-[40%]">
                        <div className="our_slider pt-20">
                            <NewSlider />
                        </div>
                        <div className="content_info flex flex-col gap-0 pl-5">
                            <h4 className='regular-28 poppins-font'>Ysenis Lûfengrad</h4>
                            <p className="regular-18 text-black-80">Branding /Web Design /Mobile Design</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex' }}>
                    <div className='ServicesSliderImage flex flex-col gap-4 w-[60%]'>
                        <img src="/Charmaine Sapp.png" alt="Charmaine Sapp" />
                    </div>
                    <div className="slider_content_info flex flex-col justify-between w-[40%]">
                        <div className="our_slider pt-20">
                            <NewSlider />
                        </div>
                        <div className="content_info flex flex-col gap-0 pl-5">
                            <h4 className='regular-28 poppins-font'>Ysenis Lûfengrad</h4>
                            <p className="regular-18 text-black-80">Branding /Web Design /Mobile Design</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{ display: 'flex' }}>
                    <div className='ServicesSliderImage flex flex-col gap-4 w-[60%]'>
                        <img src="/Charmaine Sapp.png" alt="Charmaine Sapp" />
                    </div>
                    <div className="slider_content_info flex flex-col justify-between w-[40%]">
                        <div className="our_slider pt-20">
                            <NewSlider />
                        </div>
                        <div className="content_info flex flex-col gap-0 pl-5">
                            <h4 className='regular-28 poppins-font'>Ysenis Lûfengrad</h4>
                            <p className="regular-18 text-black-80">Branding /Web Design /Mobile Design</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
