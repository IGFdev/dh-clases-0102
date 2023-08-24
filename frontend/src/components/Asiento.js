import React, { Component } from 'react';
import '../static/css/home.css';

class Asiento extends Component {
    constructor(props) {
        super(props)
    }

    componentWillUnmount(){
        console.log('El asiento se demontará!');
    }

    render() {
        return (
            <div className="asiento" >
                <h1>Soy un asiento</h1>
            </div>
        )
    }
}

export default Asiento;