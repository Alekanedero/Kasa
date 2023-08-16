import React from 'react'

function Collapse_double({ description, equipements }) {
  return (
    <div className="collapse">
         <div className="collapse__menu" onClick={toggle}>
            <h3 className="collapse__title">Description</h3>
            <img
               className={
                  isOpen
                     ? 'collapse__arrow collapse__arrow--down'
                     : 'collapse__arrow collapse__arrow--up'
               }
               src={chevron}
               alt="flèche haut-bas"
            />
         </div>
         <div
            className={
               isOpen
                  ? 'collapse__details collapse__details--open'
                  : 'collapse__details collapse__details--collapsed'
            }
         >
            {/* vérifie si details est un object */}
            {typeof details === 'object' ? (
               details.map((item, index) => <p key={index}>{item}</p>)
            ) : (
               <p>{details}</p>
            )}
         </div>
      </div>
  )
}

export default Collapse_double