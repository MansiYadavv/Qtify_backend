// import React from "react";
// import { useOutletContext } from "react-router-dom";
// import { fetchFilters } from "../../../utils/Api";

// import Section from "../../Section/Section"; // Ensure the correct import path and filename
// import styles from "./Home.module.css";

// export default function HomePage() {
//   const { data } = useOutletContext();
//   const { newAlbums, topAlbums, songs } = data;

//   return (
//     <>
 
//       <div className={styles.wrapper}>
//         <Section title="Top Albums" data={topAlbums} type="album" />
//         <Section title="New Albums" data={newAlbums} type="album" />
//         <Section
//           title="Songs"
//           data={songs}
//           filterSource={fetchFilters}
//           type="songs" 
//         />
//       </div>
//     </>
//   );
// }
