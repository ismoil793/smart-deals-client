import React from 'react';

const YandexMap = ({height}) => {
   return (
       <div id="map" className="bg-white">
          <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A45cc1e32daaa677eff16bde4e10adeb86fa7dedef858da86387e2792e91ba95d&amp;source=constructor"
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