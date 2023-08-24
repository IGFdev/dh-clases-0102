import React, { Component } from 'react';
import Asiento from './Asiento';

class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: this.props.valorInicial,
            otroContador: 9,
            loader: true,
            gifUrl: ""
        }
    }

    // Cuando se monta
    async componentDidMount() {
        this.loader = true;
        console.log('El componente fue montado!');

        setTimeout(() => {
            console.log('El loader debería de desaparecer');
            this.setState({
                loader: false
            });
        }, 500);

        // Fetcheamos a la API
        const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd2NXPdn06Qdh64qxmGRVM69&tag=&rating=g');
        const gifData = await response.json(); 

        this.setState({
            gifUrl: gifData.data.images.downsized_large.url
        })

    }

    // Cuando se actualiza (su state)
    componentDidUpdate() {
        console.log('El componente se actualizó');
    }

    // Cuando se vaya a desmontar
    componentWillUnmount() {
        console.log('El componente se desmontará');
    }

    sumar = () => {
        this.setState({
            contador: this.state.contador + 1
        });
    }

    restar = () => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <>
                {this.state.loader
                    ?
                    <>
                        <h1>Cargando</h1>
                        <h1></h1>
                    </>
                    :
                    <>
                        {this.state.gifUrl !== "" && <img src={this.state.gifUrl} />}
                        <h1>asdf</h1>
                        <button id='sumar' onClick={this.sumar}>
                            +
                        </button>
                        <h1>{this.state.contador}</h1>
                        <button id='restar' onClick={this.restar}>
                            -
                        </button>
                        {this.state.contador >= 10
                            ? <Asiento />
                            : <h1>Debe ser mayor a 10</h1>
                        }
                    </>
                }
            </>
        );
    }
}

/* function Contador(props) {
    let contador = props.valorInicial;

    return (
        <>
            <button id='sumar'>
                +
            </button>
            <h1>{contador}</h1>
            <button id='restar'>
                -
            </button>
        </>
    )

} */

export default Contador;