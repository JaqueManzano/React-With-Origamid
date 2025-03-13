import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

function App() {

  const [ativo, setAtivo] = React.useState(false)
  const [dados, setDados] = React.useState({nome: 'André', idade: 30})
  const [modal, setModal] = React.useState(() =>{
    const ativo = window.localStorage.getItem('ativo');
      return ativo;
  });

  let [items, setItems] = React.useState('Teste');

  console.log('Log')
  function handleClick() {
    setAtivo(!ativo)  
    console.log(ativo)
    setDados({...dados, faculdade: "Engenharia"})
  }

  function handleClickItems(){
    setItems("Outro")
  }

  return (
  <div>
    <p>{items}</p>
      <div>{modal ? "Modal aberto" : "Modal fechado"}</div>
      <button onClick={handleClickItems}>Clique aqui</button>
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
