import './App.css'
import Card from 'react-bootstrap/Card'
import Produto from './Produto';
import React from 'react';

 function App() {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
       <Card bg={'dark'} text='white' className='m-5' style={{maxWidth: '18rem'}}>
          <Card.Header>
          Exemplo utilizando o react bootstrap
          </Card.Header>
          <Card.Title>
            R$ 2500,00
          </Card.Title>
          <Card.Body>
          Este é um card do react-bootstrap
          </Card.Body>
    </Card>
    <div className="card bg-dark text-white m-5" style={{maxWidth: '18rem'}}>
      <div className="card-header">Exemplo utilizando o bootstrap puro</div>
      <div className="card-body">
        <h5 className="card-title">R$ 2500</h5>
        <p className="card-text">Esse é um notebook com 1 tb</p>
      </div>
    </div>
    <button onClick={() => setAtivar(!ativar)}>Ativar</button>
    {ativar && <Produto/>}
    </div>
  );
}

export default App;
