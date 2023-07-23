import React from 'react';
import '../styles/SearchResults.css';
import Tracklist from './Tracklist';

function SearchResults({searchResults}) {
    return (
        <div className='results-container'>
            <h3 className='results-title'>Results</h3>
            <Tracklist tracks={searchResults}/>
        </div>
    );
}

export default SearchResults;