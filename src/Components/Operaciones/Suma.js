import React from 'react'
import {Button} from '@material-ui/core'

export default class suma extends React.Component{
    constructor(){
        super()
        this.state={
            num1:60,
            num2:40,
            suma:0
        }
    }
    calcularSuma(){
        this.setState({
            suma: this.state.num1 + this.state.num2
        })
    }
    render(){
        return(
            <div>
            <h1>Suma</h1>
            <h1>{this.state.suma}</h1>
            <Button onClick={()=> this.calcularSuma()}>
                Sumar
            </Button>
            </div>
        )
    }
}