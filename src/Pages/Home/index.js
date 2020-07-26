
import React, { Component } from 'react';
import TimerComponent from '../../Components/TimerComponent';
import TitleComponent from '../../Components/TitleComponent'
import Operaciones from '../../Components/Operaciones/index'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: null
        }
    }

    componentDidMount() {
        console.log("init component");
    }

    componentWillUnmount(){
        console.log("end component");
    }
    
    render() {
        return (
            <div>
                <TitleComponent name="HOME PAGE"/>
                <TimerComponent />
                <Operaciones />
            </div>
        );
    }
}
export default HomePage