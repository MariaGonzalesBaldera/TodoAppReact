import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {
    componentWillUnmount(){
        console.log('Comportamiento antes del que es componente desaparezca')
    }
  render() {
    return (
      <div><h1>WillUnMount</h1></div>
    )
  }
}
export const WillunmountHook =()=>{
    useEffect(() => {
      return () => {
        console.log('Comportamiento antes del que es componente desaparezca')
      }
    }, [])
    
    return(
      <div><h1>WillUnMount</h1></div>
    )
}