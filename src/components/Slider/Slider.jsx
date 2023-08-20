import './Slider.scss'
// import Swiper core and required modules
import {Navigation, Pagination, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import Slide from "./Slide";
import SliderButton from "./SwiperPrevButton";


const Slider = () => {
    return (
        <article className={'slider'}>
            <h2 className={'slider-title'}>що говорять наші клієнти з<br/> рекрутингу та залучення талантів</h2>
            <section className={'slider-item'}>
                <Swiper
                    slidesPerView='auto'
                    pagination={{
                        type: 'fraction',
                    }}
                    modules={[Pagination, Navigation, A11y]}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide><Slide/></SwiperSlide>
                    <SwiperSlide><Slide/></SwiperSlide>
                    <SwiperSlide><Slide/></SwiperSlide>
                    <SwiperSlide><Slide/></SwiperSlide>
                    <SwiperSlide><Slide/></SwiperSlide>
                    <SwiperSlide><Slide/></SwiperSlide>
                    <SliderButton/>
                </Swiper>
            </section>
        </article>
    )
}

export default Slider;