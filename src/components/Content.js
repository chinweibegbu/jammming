import React from 'react';
import '../styles/Content.css';
import Playlist from './Playlist';
import SearchResults from './SearchResults';

function Content() {
    return (
        <div className='content'>
            <SearchResults />
            <Playlist />
        </div>
    )
}

export default Content;