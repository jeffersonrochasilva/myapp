import React from "react";

const BemVindo = (props) => {
  return (
    <div>
      <h2>
        Bem vindo {props.nome} que tem a idade de: {props.idade}
      </h2>
      <Equipe nome={props.nome} idade={props.idade} cargo={props.cargo} />
    </div>
  );
};

const Equipe = (props) => {
  return (
    <div>
      <h3>
        hello, eu sou o {props.nome} e tenho {props.idade}, e o meu cargo é{" "}
        {props.cargo}
      </h3>
    </div>
  );
};

export default function app() {
  return (
    <div>
      <h1>hello word</h1>
      <BemVindo nome="matheus" idade="42" cargo="development" />
      <BemVindo nome="Jefferson" idade="29" cargo="ajudante de almocahrifado" />
    </div>
  );
}
