import React from 'react';
import '../styles/Track.css';

function Track({resultDetails}) {
    return (
        <div className='track'>
            <div>
                <p className='track-title'>{resultDetails.titleTrack}</p>
                <p className='track-details'>{resultDetails.artist} | {resultDetails.albumName}</p>
            </div>
            <div>
                <img className='add-track-icon' src={require('../add-icon-thin.png')} alt='Add'/>
            </div>
        </div>
    );
}

export default Track;