import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import classes from '../styles/Content/BuySlider.module.scss';
import image1 from "../assets/img/FABC-MTK5624-PJY002N_13_sf.jpg";
import image2 from "../assets/img/FABC-MTK5624-PJY002N_13_mf.jpg";
import image3 from "../assets/img/FABC-MTK5624-PJY002N_13_mb.jpg";
import image4 from "../assets/img/FABC-MTK5624-PJY002N_13_mf.jpg";
import image5 from "../assets/img/FABC-MTK5624-PJY002N_13_lf.jpg";


export default function  BuySlider  () {
    const imgSlider = {
        width: '100%',
        height: '100%'
    }
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={5}
        >
            <Slider>
                <Slide index={0}><img style={imgSlider} src={image1} alt=""/></Slide>
                <Slide index={1}><img style={imgSlider} src={image2} alt=""/></Slide>
                <Slide index={2}><img style={imgSlider} src={image3} alt=""/></Slide>
                <Slide index={3}><img style={imgSlider} src={image4} alt=""/></Slide>
                <Slide index={4}><img style={imgSlider} src={image5} alt=""/></Slide>

            </Slider>
            <div className={classes.btnCover}>
                <ButtonBack className={classes.btnSlide}>Back</ButtonBack>
                <ButtonNext className={classes.btnSlide}>Next</ButtonNext>
            </div>

        </CarouselProvider>
    );
}

