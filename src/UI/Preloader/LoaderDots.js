import React from 'react';
import "./loader.css"

const LoaderDots = () => {
   return (
       <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
       </div>
   );
};

export default LoaderDots;