import './Slider.scss'
import {useSwiper} from "swiper/react";

export default function SliderButton() {
    const swiper = useSwiper();
    return (
        <div className={'buttons'}>

            <button className={'btn-prev'} onClick={() => swiper.slidePrev()}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </button>
            <button className={'btn-next'} onClick={() => swiper.slideNext()}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </button>

        </div>

    )
}

