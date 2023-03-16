import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {
    componentDidUpdate() {
        console.log('Comportamiendo con el componente recibe nuevos props o cambiar su estado')
    }
    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}
export const DidupdateHook = () => {
    useEffect(() => {
        console.log('Comportamiendo con el componente recibe nuevos props o cambiar su estado')
    })
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    )
} 