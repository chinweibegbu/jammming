import React from 'react';
import '../styles/Track.css';

function Track({trackDetails}) {
    return (
        <div className='track'>
            <div>
                <p className='track-title'>{trackDetails.titleTrack}</p>
                <p className='track-details'>{trackDetails.artist} | {trackDetails.albumName}</p>
            </div>
            <div>
                <img className='add-track-icon' src={require('../add-icon-thin.png')} alt='Add'/>
            </div>
        </div>
    );
}

export default Track;