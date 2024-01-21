'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css'
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import ProductCard from '../cards/ProductCard';



const ProductSlider = () => {
    const [product, setProduct] = useState([])
    const getProduct = async () => {
        const res = await fetch('/api/product', {
            method: 'GET',
        })

        const { data } = await res.json()
        setProduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])

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
            {
                product?.map((item, index) => {
                    return <SwiperSlide key={index} >
                        <ProductCard item={item} />
                    </SwiperSlide>
                })
            }

        </Swiper>
    )
}

export default ProductSlider