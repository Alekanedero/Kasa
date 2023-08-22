import React from 'react';
import '../style/banner.css';

function Banner(dataBanner) {
   return (
      <div className="banner">
         <img className="banner__img" src={dataBanner.img} alt="paysage" />
         <h1 className="banner__title">{dataBanner.title}</h1>
      </div>
   );
}

export default Banner;
