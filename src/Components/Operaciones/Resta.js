import React, { useState } from 'react'
import {Button} from '@material-ui/core'
export default function Resta(){
    const [state,Setstate]=useState({
        num1:50,
        num2:10,
        resta:0
    })
    const calcularResta=()=>{
        Setstate({...state,
            resta: state.num1 - state.num2
        })
    }
    return(
        <div>
            <h1>Resta</h1>
            <h1>{state.resta}</h1>
            <Button onClick={calcularResta}>
                Restar
            </Button>
        </div>
    )
}