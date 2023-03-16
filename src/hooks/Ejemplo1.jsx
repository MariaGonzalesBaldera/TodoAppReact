import React, {useState} from 'react'

const Ejemplo1 =()=> {
    const valorInicial = 0
    const personaInicial ={
        nombre : 'Maria',
        email : 'Maria@gmail.com'
    }
    const [contador, setContador]= useState(valorInicial)
    const [persona, setPersona]= useState(personaInicial)
    function incrementarContador(){
        setContador(contador+1)
    }

    function actualizarPersona(){
        setPersona(
            {
            nombre: "cristina",
            email: "cristina@gmail.com"
            }
        )
    }
  return (
    <div>
    <h1>*** Ejemplo de use State() ***</h1>
    <h2>Contador: {contador}</h2>
    <h2>Persona: </h2>
    <h3>Nombre: {persona.nombre}</h3>
    <h3>Correo: {persona.email}</h3>
    <button onClick={incrementarContador}>Incrementar </button>
    <button onClick={actualizarPersona}>Actualizar persona </button>
    </div>
  )
}
export default Ejemplo1