import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "./MainCarousel.css";
import "swiper/css";
import 'swiper/css/navigation';
import { Container } from "react-bootstrap";

export default function MainCarousel() {
  return (
    <Container className="my-5">
      <Swiper modules={[Navigation]} spaceBetween={50} slidesPerView={1} loop={true} navigation>
        <SwiperSlide className="main-carousel__slide">
          <img src="/images/1.jpg" className="main-carousel__img" alt="" />
        </SwiperSlide>
        <SwiperSlide className="main-carousel__slide">
          <img src="/images/2.jpg" className="main-carousel__img" alt="" />
        </SwiperSlide>
        <SwiperSlide className="main-carousel__slide">
          <img src="/images/3.jpg" className="main-carousel__img" alt="" />
        </SwiperSlide>
        <SwiperSlide className="main-carousel__slide">
          <img src="/images/4.jpg" className="main-carousel__img" alt="" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
