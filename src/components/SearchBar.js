import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <form>
            <div className='search-bar'>
                <input type="text" name="searcTerm" value={searchTerm} placeholder="e.g. Stray Kids" onChange={handleSearchTermChange} />
                <input type="submit" value="SEARCH" />
            </div>
        </form>
    );
}

export default SearchBar;