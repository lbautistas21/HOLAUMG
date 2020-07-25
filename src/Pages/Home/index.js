
import React, { Component } from 'react';
import TimerComponent from '../../Components/TimerComponent';
import TitleComponent from '../../Components/TitleComponent'
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
            </div>
        );
    }
}
export default HomePage