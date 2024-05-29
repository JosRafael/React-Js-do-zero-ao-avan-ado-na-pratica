import React from "react";

const Bemvindo=(props) => {
  return(
    <div>
      <h2>Bem-vindo(a) {props.nome}</h2>
      <h3>Tenho {props.idade} anos</h3>
    </div>
  )
}

function App() {
  return (
    <div>
      Olá mundo!
      <Bemvindo nome=" Matheus" idade="25"/>
      <Bemvindo nome=" Amanda" idade="10"/>
      <h2>Curso React</h2>
    </div>
  );
}

export default App;
