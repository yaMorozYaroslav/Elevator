import React from 'react';
const SearchArea =(props)=>{
	return(
       <div className="search-area">
          <form onSubmit={props.searchBook} action="">
             <input onChange={props.handleSearch} type="text"/>
             <button type="submit">Search</button>
             <select default value="Sort" onChange={props.handleSort}>
                 <option disabled value="Sort">Sort</option>
                 <option value="Author">Author</option>
                 <option value="Language">Language</option>
             </select>
          </form>
         </div>
		)
}
export default SearchArea;