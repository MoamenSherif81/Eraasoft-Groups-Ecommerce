import { Container } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "./ProductSection.css";
import { PropTypes } from "prop-types";

export default function ProductSection({ title, products }) {
  return (
    <Container className="mb-5">
      <h3>{title}</h3>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation
        breakpoints={{ 1400: { slidesPerView: 4 }, 992: { slidesPerView: 3 }, 552: { slidesPerView: 2} }}
      >
        {products.map((ele) => {
          return (
            <SwiperSlide className="h-auto" key={ele.id}>
              <ProductCard product={ele} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}

ProductSection.propTypes = {
  title: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object),
};
