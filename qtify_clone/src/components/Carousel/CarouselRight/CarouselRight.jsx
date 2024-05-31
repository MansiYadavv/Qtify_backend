import React, { useState, useEffect } from 'react';
import { useSwiper } from 'swiper/react';
import RightArrow from '../../../assets/RightArrow.svg';
import styles from './CarouselRight.module.css';

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper ? swiper.isEnd : false);

    useEffect(() => {
        if (!swiper) {
            console.error("Swiper instance is not available");
            return;
        }

        const handleSlideChange = () => {
            setIsEnd(swiper.isEnd);
        };

        swiper.on("slideChange", handleSlideChange);

        // Cleanup function to remove the event listener
        return () => {
            swiper.off("slideChange", handleSlideChange);
        };
    }, [swiper]);

    return (
        <div className={styles.rightNavigation}>
            {!isEnd && (
                <img
                    src={RightArrow}
                    alt="Right Arrow"
                    onClick={() => swiper.slideNext()}
                    className={styles.rightArrow}
                />
            )}
        </div>
    );
};

export default CarouselRightNavigation;
