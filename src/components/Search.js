import React from 'react'
import { MdSearch } from 'react-icons/md';

export const Search = ({ handleSearchNote }) => {
    return (
        <div className='search'>
            <MdSearch className='search-icons' size='1.3em' />
            <input type='text' placeholder='Search' onChange={(event) => handleSearchNote(event.target.value)} />
        </div>
    )
}
export default Search;