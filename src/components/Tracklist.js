import React from 'react';
import '../styles/Tracklist.css';
import Track from './Track';

function TrackList({tracks}) {
    return (
        <div className='tracks-scrollable'>
            <ul className='tracks'>
                {tracks.map((track, i) => {
                    return <li key={"track-"+i}><Track trackDetails={tracks[i]} /></li>;
                })}        
            </ul>
        </div>
    );
}

export default TrackList;