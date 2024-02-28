import React from 'react'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

function Search({search, toggleSearch}) {
    return (
        <div className={`search ${search ? "show-search":""}`}>
            <input type="text" placeholder='Search....' ref={input => input && input.focus()} />
            <span onClick={toggleSearch}><HighlightOffOutlinedIcon /></span>
        </div>
    )
}

export default Search
