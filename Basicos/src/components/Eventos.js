import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
    // Hacer esto, cada que se define un evento en un componente basado en clases
    // React recomienda hacer el bindeo en el constructor
  }

  sumar(e) {
    //console.log("Sumando");
    //console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    //console.log("Restar");
    //console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow functions
  sumar = (e) => {
    //console.log("Sumando");
    //console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    //console.log("Restar");
    //console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

/* function Boton(props) {
  return <button onClick={props.myOnClick}>Botón hecho componente</button>;
} */

/* const Boton = (props) => (
  <button onClick={props.myOnClick}>Botón hecho componente</button>
); */

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    //console.log(e);
    //console.log(e.nativeEvent);
    //console.log(e.target);
    //console.log(e.nativeEvent.target);
    //console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola, pasando parametro desde un evento")
          }
        >
          Saludar
        </button>

        {/*Evento Personalizado para que pueda imprimir ese mensaje */}
        {/*<Boton onClick={(e) =>
                        this.handleClick(e, 'Hola, pasando parametro desde un evento')}/>
                */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(
              e,
              "Hola, pasando parametro desde un evento personalizado"
            )
          }
        />
      </div>
    );
  }
}
