import React, { useState } from 'react'

const loggedStyle = {
    backgroundColor:'green',
    color:'white',
    fontWeight:'bold'
}
const unloggedStyle = {
    backgroundColor:'tomato',
    color:'white',
    fontWeight:'bold'
}


const LoginButton = ({ Loginaction }) => {
    return (
        <button style={loggedStyle} onClick={Loginaction}>Login</button>
    )
}

const LogoutButton = ({ Logoutaction }) => {
    return (
        <button style={unloggedStyle} onClick={Logoutaction}>Logout</button>
    )
}

const OptionalRender = () => {
    const [access, setAccess] = useState(false)
    const [nMessage, setNMessage] = useState(0)

    const Loginaction = () => {
        setAccess(true)
    }
    const Logoutaction = () => {
        setAccess(false)
    }

    let Isbutton;
    (access) ? Isbutton = <LogoutButton Logoutaction={Logoutaction}></LogoutButton> :
        Isbutton = <LoginButton Loginaction={Loginaction}></LoginButton>

    let addMessages =()=>{
        setNMessage(nMessage + 1)
    }

    return (
        <div>
        {Isbutton}
        {access ? <div>
            { nMessage > 0 ? 
         <p>You have {nMessage} new message{nMessage>1 ? 's' : null }...</p>:
         <p>There are no new message</p>   
        }
        <button onClick={addMessages}>{nMessage ===0 ? 'Add you first message': 'Add message'}</button>
        </div>
        :'Ingresar'}
        
        </div>
    )
}
export default OptionalRender;







