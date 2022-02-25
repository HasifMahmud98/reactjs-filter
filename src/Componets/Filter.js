import React from 'react'

const Filter = ({setActiveGenre, activeGenre, setFiltered, popular}) => {
  return (
    <div className="filter-container">
        <button onClick={() => setActiveGenre(0)}>All</button>
        <button onClick={() => setActiveGenre(35)}>Comedy</button>
        <button onClick={() => setActiveGenre(28)}>Action</button>
    </div>
  )
}

export default Filter;