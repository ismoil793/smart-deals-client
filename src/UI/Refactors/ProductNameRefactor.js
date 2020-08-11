import React from 'react';

const ProductNameRefactor = ({name = "",trade_mark = "", chars = 19}) => {

   // display less info or more depending on screen sizes
   const deviceWidth = () => {
      let width = window.innerWidth;
      if((width > 991 && width < 1200) || width > 1366) {
         return true
      } else if(width < 576) {
         return true
      } else {
         return false
      }
   };

   const formatName = (name, trade_mark, chars) => {
      if(name.length + trade_mark.length > chars && deviceWidth()) {
         return `${name.slice(0, chars - trade_mark.length)}...`
      } else if(name.length + trade_mark.length > 15 && !deviceWidth()) {
         return `${name.slice(0, 15 - trade_mark.length)}...`
      } else {
         return `${name}`
      }
   };

   return (
       <React.Fragment>
          {formatName(name, trade_mark, chars)}
       </React.Fragment>
   );
};

export default ProductNameRefactor;