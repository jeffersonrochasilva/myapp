import React, { Component } from "react";

class Membro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: props.nome,
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar(nome) {
    this.setState({ nome: nome });
  }
  sair(nome) {
    this.setState({ nome: nome });
  }

  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <button onClick={() => this.entrar("Matheus")}>Entrar</button>
        <button onClick={() => this.sair("Usuário ausente")}>Sair</button>
      </div>
    );
  }
}

export default Membro;
