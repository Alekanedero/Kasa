import React from 'react'
import { Link } from 'react-router-dom'
import '../style/notFound.css'

function NotFound() {
   return (
      <div className="not">
         <h1 className="not__title">404</h1>
         <p className="not__description">
            Oups! La page que vous demandez n'existe pas.
         </p>
         <Link
            className="not__link"
            to="/">
            Retourner sur la page d'accueil
         </Link>
      </div>
   )
}

export default NotFound
