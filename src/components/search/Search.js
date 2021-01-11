import React, { useState } from 'react';

const Search = (props) => {
  const [searchResult, setSearchResult] = useState('');

  const searchHandler = (event) => {
    setSearchResult(event.currentTarget.value);
    props.sendSearch(event.currentTarget.value);
  };

  return (
    <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
      <div>ICON</div>
      <input
        style={{
          border: 'none',
          backgroundColor: 'lightgrey',
          padding: '0 10px',
          fontSize: '16px',
          height: '100%'
        }}
        type='text'
        placeholder='SEARCH CATEGORY...'
        value={searchResult}
        onChange={searchHandler}
      />
    </div>
  );
};

export default Search;
