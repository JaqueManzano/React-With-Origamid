import React, { useEffect } from 'react'
import { GlobalContext } from './GlobalContext';

const Button = () => {
    const global = React.useContext(GlobalContext);

    useEffect(() => {
      global.adicionarUm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div>
      <p>Valor passado via Context: {global.contar}</p>
      <br/>
      <button onClick={() => global.adicionarUm()}>Contar</button>
    </div>
  )
}

export default Button
