import React from 'react';

const titulo = <h1>Esse é um título</h1>;

const App = () => {
      const random = Math.random();
      const ativo = true;

      function mostrarNome(sobrenome) {
            return 'André' + sobrenome;
      }

      const carro = {
            marca: "Ford",
            rodas: 4
      }

      const estiloP = {
            color: "blue",
            fontSize: '2rem'
      };

      return (
      <React.Fragment>
            <a className="ativo" href="https://origamid.com" title="Isto é um site">Origamid</a>
            <br></br>
            <br></br>

            <label htmlFor="nome">Nome</label>
            <input type='text' id='nome'/>
            
            <br></br>
            {titulo}
            {ativo ? 'Está ativo' : 'Está inativo'} - {10}  <br></br>
            {mostrarNome('Rafael')}

            <p style={estiloP}>{new Date().getFullYear()}</p>
            <p>{carro.marca}</p>
            <p>{carro.rodas}</p>
     
            <p className={ativo ? 'ativo' : 'inativo'}>{random * 100} / 50</p>
      </React.Fragment>);
}

export default App;
