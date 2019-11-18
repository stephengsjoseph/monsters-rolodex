import React from 'react';

import "./search-box.style.css";

export const SearcBox = ({placeholder, handleFunction}) => {
    return <input className = " search"
            type="search" 
            placeholder= {placeholder} 
            onChange= {handleFunction}
        />
};  