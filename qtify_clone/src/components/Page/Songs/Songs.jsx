import React, { useEffect, useState } from 'react';
import Cards from "../../Cards/Cards";
import styles from './Songs.module.css';
import { fetchSongs } from "../../../utils/Api";

function SongsPage() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchSongs().then(data => {
            console.log(data);
            if (!Array.isArray(data)) {
                console.error('Fetched data is not an array:', data);
                return;
            }

            data.forEach(song => {
                console.log(`Song title: ${song.title}, type: ${song.type}`);
            });

            setSongs(data);
        }).catch(error => console.error('Error fetching songs:', error));
    }, []);

    return (
        <div className={styles.songsPage}>
            <h1 className={styles.title}>Songs</h1>
            <div className={styles.cardsContainer}>
                {songs.length === 0 ? (
                    <p>No songs available.</p>
                ) : (
                    songs.map((song, index) => (
                        <Cards key={index} data={song} type="song" />
                    ))
                )}
            </div>
        </div>
    );
}

export default SongsPage;
