import React, { Component,useEffect } from 'react'

export class Didmount extends Component {
    componentDidMount(){
        console.log('Comportamiento antes de que sea añadido al DOM (redecire)')
    }
  render() {
    return (
      <div><h1>DidMount</h1></div>
    )
  }
}
export const DidmountHook=()=>{
    useEffect(()=>{
        console.log('')
    },[])
    return(
        <div><h1>DidMount</h1></div>
        )
}