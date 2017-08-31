import React from 'react';

import './style.css';

import cardChipImg from './card-chip.png';
import visaImg from './visa-logo.png';
import mastercardImg from './visa-logo.png';

const CardLogos = (props) => {
   const cardType = props.type;
   
   return (
      <section className="card-logos">
         <img src={cardChipImg} alt="Credit card chip" />
         <img src={cardType === 'visa' ? visaImg : mastercardImg} alt="Credit card logo" />
      </section>
   );
}
 
export default CardLogos;
