// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper";
import { Children } from "react";

export default function Banner({ children }) {
  const arrayChildren = Children.toArray(children);

  return (
    <Swiper
      slidesPerView={"auto"}
      modules={[Navigation]}
      className="banner-slider"
      navigation={true}
      autoplay={{
        delay: 5000,
      }}
    >
      {arrayChildren.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
