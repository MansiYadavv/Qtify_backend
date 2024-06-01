// import React, { useEffect, useState } from 'react';
// import Navbar from './components/Navbar/navbar.jsx';
// import Hero from './components/Hero/Hero.jsx';
// import styles from './App.module.css';
// import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from './utils/Api.jsx';
// import Section from './components/Section/Section.jsx';
// import Filter from "./components/Filter/Filter.jsx";

// function App() {
//   const [topAlbumSongs, setTopAlbumSongs] = useState([]);
//   const [newAlbumSongs, setNewAlbumSongs] = useState([]);
//   const [filteredDataValues, setFilteredDataValues] = useState([]);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState(0);

//   const generateSongsData = (value) => {
//     if (newAlbumSongs.length === 0) return; // Ensure there are new album songs before accessing them

//     let songData = newAlbumSongs[0].songs;

//     let key;
//     if (value === 0) {
//       setFilteredDataValues(songData);
//       return;
//     } else if (value === 1) {
//       key = 'rock';
//     } else if (value === 2) {
//       key = 'pop';
//     } else if (value === 3) {
//       key = 'jazz';
//     } else if (value === 4) {
//       key = 'blues';
//     }

//     const data = songData.filter((item) => {
//       return item.genre.key === key;
//     });
//     setFilteredDataValues(data);
//   };

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     generateSongsData(newValue);
//   };

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   const filteredData = (val) => {
//     generateSongsData(val);
//   };

//   const generateTopAlbumSongs = async () => {
//     try {
//       const topAlbumSongs = await fetchTopAlbums();
//       setTopAlbumSongs(topAlbumSongs);
//     } catch (error) {
//       console.log("Error fetching top albums:", error);
//       return null;
//     }
//   };

//   const generateNewAlbumSongs = async () => {
//     try {
//       const newAlbumSongs = await fetchNewAlbums();
//       setNewAlbumSongs(newAlbumSongs);
//     } catch (error) {
//       console.log("Error fetching new albums:", error);
//       return null;
//     }
//   };

//   const generateFilterSongs = async () => {
//     try {
//       const newAlbumSongs = await fetchSongs();
//       setFilteredDataValues(newAlbumSongs);
//     } catch (error) {
//       console.log("Error fetching songs:", error);
//       return null;
//     }
//   };

//   useEffect(() => {
//     generateTopAlbumSongs();
//     generateNewAlbumSongs();
//     generateFilterSongs();
//   }, []);

//   useEffect(() => {
//     generateSongsData(value);
//   }, [value, newAlbumSongs]);

//   return (
//     <div className={styles.wrapper}>
//       <Navbar />
//       <Hero />
//       <Section title="Top Albums" data={topAlbumSongs} type="album" />
//       <Section title="New Albums" data={newAlbumSongs} type="album" />
//       <Filter onChange={handleChange} value={value} />
//       <Section title="Songs" data={filteredDataValues} type="songs" />
//     </div>
//   );
// }

// export default App;




import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import styles from './App.module.css';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from './utils/Api.jsx';
import Section from './components/Section/Section.jsx';
import Filter from './components/Filter/Filter.jsx';
import Song from './components/Page/Songs/Songs.jsx';
function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const generateTopAlbumSongs = async () => {
      try {
        const topAlbumSongs = await fetchTopAlbums();
        setTopAlbumSongs(topAlbumSongs);
      } catch (error) {
        console.log('Error fetching top albums:', error);
      }
    };

    const generateNewAlbumSongs = async () => {
      try {
        const newAlbumSongs = await fetchNewAlbums();
        setNewAlbumSongs(newAlbumSongs);
      } catch (error) {
        console.log('Error fetching new albums:', error);
      }
    };

    const generateFilterSongs = async () => {
      try {
        const songs = await fetchSongs();
        setFilteredDataValues(songs);
      } catch (error) {
        console.log('Error fetching songs:', error);
      }
    };

    generateTopAlbumSongs();
    generateNewAlbumSongs();
    generateFilterSongs();
  }, []);

  useEffect(() => {
    generateSongsData(value);
  }, [value, newAlbumSongs]);

  const generateSongsData = (value) => {
    if (newAlbumSongs.length === 0) return;

    let songData = newAlbumSongs[0]?.songs || [];

    let key;
    if (value === 0) {
      setFilteredDataValues(songData);
      return;
    } else if (value === 1) {
      key = 'rock';
    } else if (value === 2) {
      key = 'pop';
    } else if (value === 3) {
      key = 'jazz';
    } else if (value === 4) {
      key = 'blues';
    }

    const data = songData.filter((item) => item.genre.key === key);
    setFilteredDataValues(data);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    generateSongsData(newValue);
  };

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={topAlbumSongs} type="album" />
      <Section title="New Albums" data={newAlbumSongs} type="album" />
      <Filter 
        title="Songs"
        data={newAlbumSongs}
        type="songs"
        filteredData={generateSongsData}
        filteredDataValues={filteredDataValues}
        value={value}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;

