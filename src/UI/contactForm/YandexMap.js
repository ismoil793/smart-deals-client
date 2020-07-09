import React from 'react';

const YandexMap = ({height}) => {
   return (
       <div id="map" className="bg-white">
          <iframe
              src="https://yandex.com/map-widget/v1/?um=constructor%3A3bb6e3dd91f7d07695ba78d49e1d5f7dd92a2c9881c4e1e0c1fc80755cc9a98e&amp;source=constructor"
              frameBorder="0"
              width="100%"
              height={`${height}`}
              title="map"
          >
          </iframe>
       </div>
   );
};

export default YandexMap;