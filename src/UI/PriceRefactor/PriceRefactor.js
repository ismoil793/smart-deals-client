import React from 'react';

const PriceRefactor = ({price}) => {


   const formatPrice = priceF => {
      priceF = priceF.toString();

      if (priceF.length === 5) {
         priceF = priceF.slice(0, 2) + ' ' + priceF.slice(2, 5)
      } else if (priceF.length === 4) {
         priceF = priceF.slice(0, 1) + ' ' + priceF.slice(1, 4)
      } else if (priceF.length === 6) {
         priceF = priceF.slice(0, 3) + ' ' + priceF.slice(3, 6)
      } else if (priceF.length === 7) {
         priceF = priceF.slice(0, 1) + ' ' + priceF.slice(1, 4) + ' ' + priceF.slice(4, 7)
      }

      return (<span>{priceF}</span>)
   };

   return (
       <React.Fragment>
          {formatPrice(price)}
       </React.Fragment>
   );
};

export default PriceRefactor;