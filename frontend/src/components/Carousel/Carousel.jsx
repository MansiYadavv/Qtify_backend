import React, { useEffect } from 'react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, useSwiper, SwiperSlide } from 'swiper/react';
import styles from './Carousel.module.css';
import CarouselLeft from './CarouselLeft/CarouselLeft';
import CarouselRight from './CarouselRight/CarouselRight';

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    // swiper.slideTo(0)
  }, [data]);

  return null;
};

const Carousel = ({ data, renderCardComponent }) => {
  if (typeof renderCardComponent !== 'function') {
    console.error('renderCardComponent is not a function');
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={'8'}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeft />
        <CarouselRight />
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
