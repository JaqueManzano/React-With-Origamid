import styled from 'styled-components'
import React from 'react'

const ProdutosContainer = styled.div`
  display: flex;
`

const Produto = styled.div`
  flex: 1;
`
 const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`
const Paragrafo = styled.p`
  font-size: 1.5;
  color: green;
`
const Preco = styled.p`
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`
const Comprar = styled.button`
  background: ${({ativo}) => ativo ? '#000000' : '#fff'};
  font-size: 1rem;
  border: 2px solid #000000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ativo}) => ativo ? '#fff' : '#000000'};
  cursor: pointer;
  &:hover{
    background: tomato;
  }
`

function App() {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo)
  }

  return (
    <div>
      <Comprar ativo={ativo} onClick={handleClick}>Compre aqui</Comprar>
      <ProdutosContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Meu texto é esse.</Paragrafo>
          <Preco cor="#090909ff">P$ 2000</Preco>
        </Produto>
        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>Meu texto é esse.</Paragrafo>
          <Preco cor="green">P$ 1000</Preco>
        </Produto>
      </ProdutosContainer>
    </div>
  );
}

export default App;
