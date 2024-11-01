import React from 'react'

import './Searchox.css'

const SearchBox = ({placeholder, handleChange}) => {
  return (
    <>
       <input
            className='search'       
          type="search"
          name=""
          id="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
    </>
  )
}

export default SearchBox
