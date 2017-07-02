import React from 'react';

const Search = (props) => {
  return (
    <form>
      <input type="text"
        onChange={e => {props.handleSearch(e.target.value);}}
        placeholder='Enter device name'/>
    </form>
  );
};

export default Search;
