import React from "react";

const SearchBox = ({searchChange})=>{
    return(
        <div className="pa2">
            <input 
            type= "search" 
            placeholder="Search CyberPals"
            className="pa3 ba b--green bg-lightest-blue"
            onChange={searchChange}
            style={{borderRadius:'10px'}}/>
        </div>
    )
    
}

export default SearchBox