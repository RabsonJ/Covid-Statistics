import './Loader.css';

import React from 'react'

const Loader = ({text}) => {
   return (
      <div className="overlay">
         <p className="text">{text}</p>
      </div>
   )
}

export default Loader;
