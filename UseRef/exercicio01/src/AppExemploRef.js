import React, { useState } from "react";

const App = () => {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef('');

  function handleClick(){
    console.log(comentarios)
    setComentarios([...comentarios, input])
    setInput('')
    inputElement.current.focus();
  }

  return <div>
    <ul>
      {comentarios.map(comentario => <li key={comentario}>{comentario}</li>)}
    </ul>

    <input ref={inputElement} type="text" value={input} onChange={(event) => setInput(event.target.value)}/>
    <br/>
    <br/>

    <button onClick={handleClick}>Enviar</button>

  </div>
}
 
export default App;