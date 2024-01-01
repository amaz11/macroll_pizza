import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css'
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import slide1 from '../../../public/home-2-pizza-4.png'
import slide2 from '../../../public/product-list-8.png'
import slide3 from '../../../public/product-list-7.png'
import slide4 from '../../../public/product-list-3.png'
import slide5 from '../../../public/product-list-10.png'
import ProductCard from '../cards/ProductCard';



const ProductSlider = () => {
    return (

        <Swiper
            // autoplay={{
            //     delay: 3500,
            //     disableOnInteraction: false,
            // }}
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            pagination={{
                clickable: true,
            }}

            navigation={true}
            modules={[Autoplay, FreeMode, Pagination, Navigation]}

            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}

            className="my-swiper"
        >
            <SwiperSlide>
                <ProductCard image={slide1} name='Ham Ham' detail='Peeled tomato, cheese, mushrooms, red onion, cherry tomato, black olives, rocket' prize='16' />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard image={slide2} name='Sicilan' detail='Peeled tomato, cheese, mushrooms, red onion, cherry tomato, black olives, rocket' prize='20' />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard image={slide3} name='Jalapano' detail='Peeled tomato, cheese, mushrooms, red onion, cherry tomato, black olives, rocket' prize='30' />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard image={slide4} name='Frinza' detail='Peeled tomato, cheese, mushrooms, red onion, cherry tomato, black olives, rocket' prize='12' />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard image={slide5} name='RIMINI' detail='Peeled tomato, cheese, mushrooms, red onion, cherry tomato, black olives, rocket' prize='35' />
            </SwiperSlide>
        </Swiper>
    )
}

export default ProductSlider