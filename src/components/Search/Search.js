import React from 'react';
require('./search.scss');

const Search = (props) => {
  return (
    <div className='searchBox'>
      <input type="text"
        onChange={e => {props.handleSearch(e.target.value);}}
        placeholder='Search'/>
      <div className='search-icon'><i className="fa fa-search"></i></div>
    </div>
  );
};

export default Search;
