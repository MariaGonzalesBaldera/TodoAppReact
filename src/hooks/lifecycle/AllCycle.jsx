import React, { useEffect } from 'react'

export default function AllCycle() {
    useEffect(()=>{
        console.log('Componente creado')
        const intervalID = setInterval (()=>{
            document.title= `${new Date()}`
            console.log('Actualizando el componente')
        },1000)
        return()=>{
            console.log('Componente va a desaparecer')
            document.title= 'El tiempo se a detenido'

            clearInterval(intervalID)
        }
    })
  return (
    <div>AllCycle</div>
  )
}
