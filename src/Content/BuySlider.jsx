import React, {useRef} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Navigation, Scrollbar, A11y } from "swiper";
// import 'swiper/css/Navigation'
import 'swiper/scss/effect-fade'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';

import classes from '../styles/Content/BuySlider.module.scss';
import image1 from "../assets/img/FABC-MTK5624-PJY002N_13_sf.jpg";
import image2 from "../assets/img/FABC-MTK5624-PJY002N_13_mf.jpg";
import image3 from "../assets/img/FABC-MTK5624-PJY002N_13_mb.jpg";
import image4 from "../assets/img/FABC-MTK5624-PJY002N_13_mf.jpg";
import image5 from "../assets/img/FABC-MTK5624-PJY002N_13_lf.jpg";


export default function  BuySlider  () {


    return (
        <>

            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className={classes.sliderContainer}
            >
                <SwiperSlide>
                    <img src={image1} alt=""/>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt=""/>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt=""/>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt=""/>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} alt=""/>

                </SwiperSlide>

            </Swiper>
           </>
    );
};

