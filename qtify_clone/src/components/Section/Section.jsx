// import React, { useState, useEffect } from "react";
// import Filters from "../Filter/Filter";
// import Cards from "../Cards/Cards";
// import Carousel from "../../components/Carousel/Carousel";
// import styles from "./Section.module.css";
// import { CircularProgress } from "@mui/material";

// export default function Section({ title, data, filterSource, type }) {
//   const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
//   const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
//   const [carouselToggle, setCarouselToggle] = useState(true);

//   const handleToggle = () => {
//     setCarouselToggle((prevState) => !prevState);
//   };

//   useEffect(() => {
//     if (filterSource) {
//       filterSource()
//         .then((response) => {
//           if (Array.isArray(response)) {
//             setFilters((prevFilters) => [...prevFilters, ...response]);
//           } else {
//             console.error("Filter data is not in the expected format.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching filters:", error);
//         });
//     }
//   }, [filterSource]);

//   const showFilters = filters.length > 1;
//   const filteredCards = data.filter((card) =>
//     showFilters && selectedFilterIndex !== 0
//       ? card.genre.key === filters[selectedFilterIndex].key
//       : true
//   );

//   return (
//     <div className={styles.section}>
//       <div className={styles.header}>
//         <h3 className={styles.sectionTitle}>{title}</h3>
//         <h4 className={styles.toggleText} onClick={handleToggle}>
//           {carouselToggle ? "Collapse All" : "Show All"}
//         </h4>
//       </div>
//       {showFilters && (
//         <div className={styles.filterWrapper}>
//           <Filters
//             filters={filters}
//             selectedFilterIndex={selectedFilterIndex}
//             setSelectedFilterIndex={setSelectedFilterIndex}
//           />
//         </div>
//       )}
//       {data.length === 0 ? (
//         <CircularProgress />
//       ) : (
//         <div className={styles.cardsWrapper}>
//           {carouselToggle ? (
//             <Carousel data={filteredCards} renderComponent={(data) => <Cards data={data} type={type} />} />
//           ) : (
//             <div className={styles.wrapper}>
//               {filteredCards.map((ele) => (
//                 <Cards key={ele.id} data={ele} type={type} />
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";
import styles from "./Section.module.css";
import Cards from "../Cards/Cards";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((card) => (
                <Cards data={card} type={type} key={card.id} />
              ))}
            </div>
          ) : (
            <Carousel data={data} renderCardComponent={(data) => <Cards data={data} type={type} />} />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
