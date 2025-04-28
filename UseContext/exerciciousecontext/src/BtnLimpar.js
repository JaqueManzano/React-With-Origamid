import React from 'react'
import { GlobalContext } from './GlobalContext';

export default function BtnLimpar() {
    const global = React.useContext(GlobalContext);

  return (
    <button onClick={() => global.limparDados()}>
      Limpar
    </button>
  )
}
