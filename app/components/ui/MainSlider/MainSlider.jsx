import React, { useRef, useState } from 'react';
import SliderFullWidth from '../SliderFullWidth/SliderFullWidth';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';

export const MainSlider = ({
  data,
  height,
  isCentered = false,
  sectionTitle,
  simple = false,
}) => {
  const swiperRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [navigationIndex, setNavigationIndex] = useState(0);

  const handleSlide = (ev, nav) => {
    if (ev === 'prev') {
      if (swiperRef.current.swiper.activeIndex === 0) {
        swiperRef.current.swiper.slideTo(data.length - 1);
        setNavigationIndex(swiperRef.current.swiper.activeIndex);
      } else {
        swiperRef.current.swiper.slidePrev();
        setNavigationIndex(swiperRef.current.swiper.activeIndex);
      }
    }
    if (ev === 'next') {
      if (swiperRef.current.swiper.activeIndex + 1 === data.length) {
        swiperRef.current.swiper.slideTo(0);
        setNavigationIndex(0);
        console.log(data.length - 1);
      } else {
        swiperRef.current.swiper.slideNext();
        setNavigationIndex(swiperRef.current.swiper.activeIndex);
      }
    }
    if (nav || nav === 0) {
      setNavigationIndex(nav);
      swiperRef.current.swiper.slideTo(nav);
    }
  };

  return (
    <div className={`mainBanner ${simple ? 'simple' : ''}`}>
      {sectionTitle && (
        <div className={`sectionTitleSlider `}>
          <h2 className="fs-5 fw-bold text-upperCase">{sectionTitle}</h2>
        </div>
      )}
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={(ev) => setNavigationIndex(ev.activeIndex)}
        slidesPerView={1}
        autoplay={{
          delay: 11000,
          disableOnInteraction: false,
        }}
      >
        {data.length > 1 && (
          <>
            <div className={`swiperModal__containerBtnPrev `}>
              <i
                className="icon-explora icon-arrow-left-cirlcle swiperModal__containerBtnPrev--btn-prev"
                onClick={() => handleSlide('prev')}
              ></i>
            </div>
            <div className={`swiperModal__containerBtnNext`}>
              <i
                className="icon-explora icon-arrow-right-cirlcle btn-next"
                onClick={() => handleSlide('next')}
              ></i>
            </div>
          </>
        )}
        {data &&
          data?.map((item, index) => (
            <SwiperSlide key={index}>
              <SliderFullWidth
                height={height}
                imgBackground={item.background_img}
                videoBackground={item.videoBackground}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                description={item.description}
                textButton={item.textButton}
                linkButton={item.linkButton}
                isCentered={isCentered}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
