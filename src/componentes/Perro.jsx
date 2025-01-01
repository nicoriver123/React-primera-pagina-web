import React from 'react'
import '../hoja-estilo/perro.css'
function Perro() {
  return (
    <div className='contenedor-perro'>
<img className='imagen-perro' src={require('../imagenes/animal-perro.jpg')}  />

<div className='contenedor-texto-perro'>
  <p className='nombre-perro'>Firualis</p>
  <p className='purina-perro'>Dog Chow.</p>
  <p className='texto-perro'>La purina es un compuesto nitrogenado que desempeña un papel crucial en la producción de ADN, ARN y ATP (trifosfato de adenosina) en el organismo . Está presente de forma natural en diversos alimentos, entre ellos, carnes, mariscos, legumbres y ciertas verduras.</p>
</div>


    </div>
  )
}


export default Perro;