import React, { Component } from 'react';

var FunctionalComponent=(props)=> {
    const [time,setTime] = React.useState(new Date());

    const updateTime=()=>{
        setTime(new Date());
    }

    return (
        <div>
            <h3>{time.toLocaleTimeString()}</h3>
            <button onClick={updateTime}>Actualizar</button>
        </div>
    );
}
 
export default FunctionalComponent;