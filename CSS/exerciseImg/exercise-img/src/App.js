import './App.css';
//import { ReactComponent as Dog } from './img/dog.svg'
import foto from './img/foto.jpg'
import Dog from './svg/Dog'
import React from 'react';

const App = () => {
  const [eye, setEye] = React.useState(0);

  function handleClick() {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
          setEye(i);
      }, 30 * i);
    }
  }

  return (
    <div>
      <p className="fundo" onClick={handleClick}></p>
      <Dog color='#84e' eye={eye} />
      <img src={foto} alt="cachorro"/>
    </div>
  );
}

export default App;
