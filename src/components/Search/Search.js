import React from 'react';
import PropTypes from 'prop-types';
require('./search.scss');

const Search = (props) => {
  return (
    <div className='searchBox'>
      <input type="text" name="search" placeholder="Search" onChange={e => {
        props.handleSearch(e.target.value);
      }
      }/>
    </div>
  );
};

Search.PropTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Search;
