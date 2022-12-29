import React, { Component } from "react";
import Membro from "./components/Membro";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "jefferson",
      contador: 0,
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    let state = this.state; // isso compia toda a state para a variavel
    state.contador += 1; // isso dá o acesso a variavel dentro da este e muda o seu stado
    state.nome = "aumentando";
    this.setState(state); // isso altera a state por completo
  }

  diminuir() {
    let state = this.state;
    state.contador -= 1;
    state.nome = "diminuindo";
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Hello word {this.state.nome}</h1>
        <div>
          <button onClick={this.diminuir}>-</button>
          <h3>contador: {this.state.contador}</h3>
          <button onClick={this.aumentar}>+</button>
          <hr />
          <Membro nome="Visitante" />
        </div>
      </div>
    );
  }
}

export default App;
