import React,{useState,useEffect,useRef} from 'react'

const Ejemplo2=()=> {
    const [contador1, setContador1]= useState(0)
    const [contador2, setContador2]= useState(0)

    const miRef= useRef()
    function incrementar1(){
        setContador1(contador1+1)
    }
    function incrementar2(){
        setContador2(contador2+1)
    }
    //**Se cambia siempre  useEffect */
    // useEffect(()=>{
    //     console.log('cambio en el estado del componente')
    //     console.log('Mostrando referencia al elemento DOM')
    //     console.log(miRef)
    // })
    //**Se cambia solo cuando se hace clic en contador 1 */

    // useEffect(()=>{
    //     console.log('cambio en el estado del componente')
    //     console.log('Mostrando referencia al elemento DOM')
    //     console.log(miRef)
    // },[contador1] )

    /*cuando se hace clic en contador 1 */

    useEffect(()=>{
        console.log('cambio en el estado del componente')
        console.log('Mostrando referencia al elemento DOM')
        console.log(miRef)
    },[contador1,contador2] )
  return (
    <div>
    <h1>*** Ejemplo de use State(), use Ref, use State ***</h1>
    <h2>Contador 1: {contador1}</h2>
    <h2>Contador 2: {contador2}</h2>
    <h4 ref={miRef}>
    Ejemplo de elemento referenciado
    </h4>
    <div>
        <button onClick={incrementar1}>Incrementar 1</button>
        <button onClick={incrementar2}>Incrementar 2</button>
    </div>
    </div>
  )
}
export default Ejemplo2;