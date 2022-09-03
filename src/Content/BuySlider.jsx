import image1 from "../assets/img/FABC-MTK5624-PJY002N_13_sf.jpg";
import image2 from "../assets/img/FABC-MTK5624-PJY002N_13_mf.jpg";
import image3 from "../assets/img/FABC-MTK5624-PJY002N_13_mb.jpg";
import image4 from "../assets/img/FABC-MTK5624-PJY002N_13_mf.jpg";
import image5 from "../assets/img/FABC-MTK5624-PJY002N_13_lf.jpg";
import { Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function  BuySlider  () {
    const imgSlider = {
        width: '100%',
        height: '100%'
    }
    return (
        <>
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <img style={imgSlider} src={image1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={imgSlider} src={image2} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={imgSlider} src={image3} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={imgSlider} src={image4} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img style={imgSlider} src={image5} alt=""/>
                </SwiperSlide>
            </Swiper>
        </>

    );
}

