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
            className=""
        >
            <SwiperSlide><Image src={slide1} alt='slide1' style={{
                maxWidth: '100%',
                height: '100%',
            }} /> </SwiperSlide>
            <SwiperSlide><Image src={slide2} alt='slide2' style={{
                maxWidth: '100%',
                height: '100%',
            }} /></SwiperSlide>
            <SwiperSlide><Image src={slide3} alt='slide3' style={{
                maxWidth: '100%',
                height: '100%',
            }} /></SwiperSlide>
            <SwiperSlide><Image src={slide4} alt='slide4' style={{
                maxWidth: '100%',
                height: '100%',
            }} /></SwiperSlide>
        </Swiper>

    )
}

export default Slider