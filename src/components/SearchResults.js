import React from 'react';
import '../styles/SearchResults.css';
import Track from './Track';
import { searchResults } from '../results';

function SearchResults() {
    return (
        <div className='results-container'>
            <h3 className='results-title'>Results</h3>
            <div className='results-scrollable'>
                <ul className='results'>
                    {searchResults.map((result, i) => {
                        return <li key={"result-"+i}><Track resultDetails={searchResults[i]} /></li>;
                    })}        
                </ul>
            </div>
        </div>
    );
}

export default SearchResults;