// import React from 'react'
// import { useState,useEffect } from 'react'
// import { useSwiper } from 'swiper/react'
// import LeftIcon from '../../../assets/leftArrow.svg'
// import styles from './CarouselLeft.module.css'

// const CarouselLeftNavigation = () => {
//     const swiper = useSwiper();
//     const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

//     useEffect(() => {
//         swiper.on("slideChange", () => {
//             setIsBeginning(swiper.isBeginning)
//         })
//     },[swiper])
//   return (
//     <div className={styles.leftNavigation}>
//         {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
//     </div>
//   )
// }

// export default CarouselLeftNavigation
import React, { useState, useEffect } from 'react';
import { useSwiper } from 'swiper/react';
import LeftArrow from '../../../assets/LeftArrow.svg';
import styles from './CarouselLeft.module.css';

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        const handleSlideChange = () => {
            setIsBeginning(swiper.isBeginning);
        };

        swiper.on("slideChange", handleSlideChange);

        
        return () => {
            swiper.off("slideChange", handleSlideChange);
        };
    }, [swiper]);

    if (!swiper) {
        console.error("Swiper instance is not available");
        return null;
    }

    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && (
                <img
                    src={LeftArrow}
                    alt="Left Arrow"
                    onClick={() => swiper.slidePrev()}
                    className={styles.leftArrow}
                />
            )}
        </div>
    );
};

export default CarouselLeftNavigation;
