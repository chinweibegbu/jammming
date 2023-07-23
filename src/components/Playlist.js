import React, { useState } from 'react';
import '../styles/Playlist.css';

function Playlist() {
    const [playlistName, setPlaylistName] = useState("");

    const handlePlaylistNameChange = (event) => {
        setPlaylistName(event.target.value);
    };

    return (
        <div>
            <form className='playlist-name-holder'>
                <input id='playlist-name' type='text' value={playlistName} placeholder='Name of Playlist' onChange={handlePlaylistNameChange} />
            </form>
        </div>
    );
}

export default Playlist;