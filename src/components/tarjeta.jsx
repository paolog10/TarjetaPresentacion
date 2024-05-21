import React from 'react';
//import './Tarjeta.css';
import '../styles/tarjeta.css'

const Tarjeta = ({ nombre, titulo, telefono, email, direccion, imagen, redes }) => {
  return (
    <div className="tarjeta">
      <img 
        src={imagen}
        alt="Perfil" 
        className="perfil-imagen"
      />
      <h1>{nombre}</h1>
      <h2>{titulo}</h2>
      <p>Teléfono: {telefono}</p>
      <p>Email: {email}</p>
      <p>Dirección: {direccion}</p>
      <div className="redes-sociales">
        {redes.map((red, index) => (
          <a key={index}
            href={red.url} 
            target="_blank" 
            rel="noopener noreferrer">
            <img 
              src={red.icono} 
              alt={red.nombre} 
              className="icono-red"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tarjeta;