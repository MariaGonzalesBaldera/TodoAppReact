/**Componente de formulario para autenticacion de ususario */
import React, { Component, useState } from 'react'

const Loginform =()=> {
    const initialCredentials=[{
        user:'',
        password:''
    }
]
    const [credentials,setCredentials]=useState(initialCredentials)
    return (
      <div>Loginform</div>
    )
}
export default Loginform