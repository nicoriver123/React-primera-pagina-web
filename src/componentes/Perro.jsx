import React from 'react'
import '../hoja-estilo/perro.css'
function Perro(props) {
  return (
    <div className='contenedor-perro'>
<img className='imagen-perro' src={require(`../imagenes/animal-${props.imagen}.jpg`)}  alt='foto_perro' />

<div className='contenedor-texto-perro'>
  <p className='nombre-perro'>{props.nombre}</p>
  <p className='purina-perro'>{props.purina}</p>
  <p className='texto-perro'>{props.texto}</p>
</div>


    </div>
  )
}


export default Perro;