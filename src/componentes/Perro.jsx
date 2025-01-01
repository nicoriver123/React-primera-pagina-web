import React from 'react'
import '../hoja-estilo/perro.css'
//Ejemplo 1 video: Cómo Crear una Página Web en React: Componentes, Funciones, Estilos e Importaciones
// Componente con su respectiva funcion

/*function Perro() {
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
}*/



//video de Ejercicio con props
// funcion con props
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