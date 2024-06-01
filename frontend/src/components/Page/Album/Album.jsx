// // import React from 'react';
// // import { useOutletContext } from 'react-router-dom';
// // import Cards from '../../Cards/Cards';
// // import styles from './Album.module.css';

// // function AlbumPage() {
// //     const { data: { topAlbums, newAlbums } } = useOutletContext();

// //     return (
// //         <div>
// //             <h1>Top Albums</h1>
// //             <div className={styles.cardsContainer}>
// //                 {topAlbums.map((album, index) => (
// //                     <Cards key={index} data={album} type="album" />
// //                 ))}
// //             </div>
// //             <h1>New Albums</h1>
// //             <div className={styles.cardsContainer}>
// //                 {newAlbums.map((album, index) => (
// //                     <Cards key={index} data={album} type="album" />
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // }

// // export default AlbumPage;



// import React, { useState } from 'react';
// import { useOutletContext } from 'react-router-dom';
// import { fetchAlbumBySlug } from "../../../utils/Api";
// import Cards from '../../Cards/Cards';
// import AlbumDetail from './AlbumDetail';
// import styles from './Album.module.css';

// function AlbumPage() {
//     const { data: { topAlbums, newAlbums } } = useOutletContext();
//     const [selectedAlbum, setSelectedAlbum] = useState(null);

//     const handleAlbumClick = async (slug) => {
//         const album = await fetchAlbumBySlug(slug);
//         setSelectedAlbum(album);
//     };

//     return (
//         <div>
//             <h1>Top Albums</h1>
//             <div className={styles.cardsContainer}>
//                 {topAlbums.map((album, index) => (
//                     <Cards key={index} data={album} type="album" onClick={() => handleAlbumClick(album.slug)} />
//                 ))}
//             </div>
//             <h1>New Albums</h1>
//             <div className={styles.cardsContainer}>
//                 {newAlbums.map((album, index) => (
//                     <Cards key={index} data={album} type="album" onClick={() => handleAlbumClick(album.slug)} />
//                 ))}
//             </div>
//             {selectedAlbum && <AlbumDetail album={selectedAlbum} />}
//         </div>
//     );
// }

// export default AlbumPage;
