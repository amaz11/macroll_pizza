'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './slider.css'
import Image from 'next/image';
import slide1 from '../../../public/home-3-img-7.jpg'
import slide2 from '../../../public/home-4-img-5.jpg'
import slide3 from '../../../public/home-4-img-6.jpg'
import slide4 from '../../../public/pexels-roman-odintsov-5903271.jpg'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';


const Slider = () => {
    return (
        <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            slidesPerView={2}
            spaceBetween={40}
            freeMode={true}
            loop={true}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
            }}
            className=""
        >
            <SwiperSlide>
                <div>
                    <Image src={slide1} alt='slide1' style={{
                        width: '100%',
                        height: '100%',
                    }} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={slide2} alt='slide2' style={{
                        width: '100%',
                        height: '100%',
                    }} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={slide3} alt='slide3' style={{
                        width: '100%',
                        height: '100%',
                    }} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src={slide4} alt='slide4' style={{
                        width: '100%',
                        height: '100%',
                    }} />
                </div>
            </SwiperSlide>
        </Swiper>

    )
}

export default Slider