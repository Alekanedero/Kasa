import React from 'react';
import { Link } from 'react-router-dom';

import '../style/notFound.css';

export default function notFound() {
  return (
    <div>
      <h1>404</h1>
      <p className="texte_erreur">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="lien_accueil" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
