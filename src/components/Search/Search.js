import React from 'react';
require('./search.scss');

const Search = (props) => {
  return (
    <div className='searchBox'>      
      <input type="text" name="search" placeholder="Search" onChange={e =>
            {props.handleSearch(e.target.value);}}/>
    </div>
  );
};

export default Search;