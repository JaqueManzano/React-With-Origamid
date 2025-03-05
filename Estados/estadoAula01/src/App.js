import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

function App() {

  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({nome: 'André', idade: 30})
  const [modal, setModal] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo)  
    console.log(ativo)
    setDados({...dados, faculdade: "Engenharia"})
  }

  return (
  <div>
      <div>{modal ? "Modal aberto" : "Modal fechado"}</div>
      <ButtonModal setModal={setModal}/>
      <Modal modal={modal} setModal={setModal}/>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
    <button onClick={handleClick} >{ativo ? 'Ativo' : 'Inativo'} </button>
  </div>
  );
}

export default App;
