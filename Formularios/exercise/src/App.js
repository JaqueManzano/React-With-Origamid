import usuarioModel from "./model/usuarioModel";
import React, { useEffect } from "react";
import Form from "./Form";

function App() {
  const [usuario, setUsuario] = React.useState({ ...usuarioModel });
  const [textarea, setTextarea] = React.useState('');
  const [select, setSelect] = React.useState('');
  const [radio, setRadio] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState([]);
  const coresArray = ['azul','roxo', 'laranja','verde','vermelho', 'cinza'];
  const [cep, setCep] = React.useState('');

  function handleChangeCores({target}) {
    console.log(target.value)
    if(target.checked){
        setCores([...cores, target.value])
    }else{
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }


  function checkColor(cor){
    return cores.includes(cor);
  }
  
  function handleChange({target}) {
    setRadio(target.value)
  }
 
  const [error, setError] = React.useState(null);
    function handleChangeCor({target}) {
    setCor(target.value)
  }

  function validateCep(value) {
    if(value.length === 0){
      setError('Preencha um valor');
      return false;
    }else if(!/^\d{5}-?\d{3}$/.test(value)){
      setError('Preencha um cep válido.')
      return false;
    }else{
      setError(null);
      return true;
    }
  }
  function handleBlur({target}) {
    validateCep(target.value);
  }

  function handleChangeCep({target}) {
    if(error) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    if(validateCep(cep)){
      console.log('enviou');
    } else{
      console.log("não enviou")
    }
  }

  return (
    <div className="App">
        {/* <Form usuario={usuario} setUsuario={setUsuario}/> */}
        {/* <pre>{JSON.stringify(usuario, null, 2)}</pre> */}

        <form>

          <div>
          <textarea
          value={textarea}
          onChange={(event) => setTextarea(event.target.value)}
          rows={5}
          />

          {textarea}
          </div>

          <div>
            <select id="produtos" onChange={(event) => {setSelect(event.target.value)}}>
              <option disabled value=''>Selecione...</option>
              <option value='notebook'>Notebook</option>
              <option value='smartphone'>Smartphone</option>
              <option value='tablet'>Tablet</option>
            </select>

            {select}

          </div>

           <h1> Cores </h1> 
            <div>
              <label>
                <input
                type="radio"
                name="cor"
                value="branco"
                checked={cor === 'branco'}
                onChange={handleChangeCor}
                />
                Branco
              </label>
              <label>
                <input
                type="radio"
                name="cor"
                value="amarelo"
                checked={cor === 'amarelo'}
                onChange={handleChangeCor}
                />
                Amarelo  
              </label>

              <br/>
              <br/>
              {cor}
            </div> 
            
            <h1> Produtos </h1> 
            <div>
              <label>
                <input
                type="radio"
                name="produto"
                value="smartphone"
                checked={radio === 'smartphone'}
                onChange={handleChange}
                />
                Smartphone
              </label>
              <label>
                <input
                type="radio"
                name="produto"
                value="notebook"
                checked={radio === 'notebook'}
                onChange={handleChange}
                />
                Notebook
              </label>

              <br/>
              <br/>
              {radio}
            </div>
            

           {/*  <h1>Checkbox</h1>
            {termos && <p>Aceitou os termos</p>}
           <label>
            <input 
              type="checkbox" 
              value="Termos" 
              checked={termos} 
              onChange={({target}) =>setTermos(target.checked)}
            />
           Aceito os termos
           </label> 
           <br/>
           <br/>

           <label>
            <input 
              type="checkbox" 
              value="azul" 
              checked={checkColor('azul')} 
              onChange={handleChangeCores}
            />
            Azul
           </label> 
              <label>
            <input 
              type="checkbox" 
              value="vermelho" 
              checked={checkColor('vermelho')} 
              onChange={handleChangeCores}
            />
            Vermelho
           </label> */}



           <br/>
           <br/>
           <h1>Cores com array</h1>
           {coresArray.map((cor) =>  (
             <label key={cor} style={{textTransform: 'capitalize'}}>
            <input 
              type="checkbox" 
              value={cor}
              checked={checkColor(cor)} 
              onChange={handleChangeCores}
            />
            {cor}
           </label> 
              )
           )}
        </form>

           <br/>
           <br/>
           <h1>VALIDAÇÃO</h1>

           <form onSubmit={handleSubmit}>
              <input 
                id="cep" 
                type="text"
                value={cep}
                onChange={handleChangeCep}
                onBlur={handleBlur}/>
                <button>Enviar</button>
            </form>
            {error && <p>{error}</p>}
    </div>
  );
}

export default App;
