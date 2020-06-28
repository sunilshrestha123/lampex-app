import React from 'react';
import './search-box.style.scss';
const SearchBox = ({ placeholder, onChange }) => {
  return (
    <div>
      <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
