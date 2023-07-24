import React, { useState } from 'react';
import '../styles/Playlist.css';
import TrackList from './Tracklist';

function Playlist({addedTracks}) {
    const [playlistName, setPlaylistName] = useState("");

    const handlePlaylistNameChange = (event) => {
        setPlaylistName(event.target.value);
    };

    return (
        <div className='playlist-container'>
            <form className='playlist-name-holder'>
                <input id='playlist-name' type='text' value={playlistName} placeholder='Name of Playlist' onChange={handlePlaylistNameChange} />
            </form>
            <TrackList tracks={addedTracks}/>
        </div>
    );
}

export default Playlist;