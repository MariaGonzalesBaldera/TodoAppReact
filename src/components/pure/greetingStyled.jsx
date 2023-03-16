import React, { useState } from 'react'
const loggedStyle = {
    color: 'white'
}
const unloggiedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}
const Greetingstyled = (props) => {
    const [logged, setLogged] = useState(false)
    const greetingUser = (<p>Hola, {props.name}</p>)
    const PleaseLogin = (<p>Please login</p>)
    return (
        <div style={logged ? loggedStyle : unloggiedStyle}>
            {logged ? greetingUser:PleaseLogin}
            <button onClick={() => {
                console.log('BBoton pulsado')
                setLogged(!logged)
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    )
}
export default Greetingstyled