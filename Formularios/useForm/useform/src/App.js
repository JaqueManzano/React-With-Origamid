import React from 'react'
import useForm from './Hooks/useForm';
import Input from './Form/Input'

function App() {
  const cep  = useForm('cep');
  const email  = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

   function handleSubmit(event){
    event.preventDefault();
    if(cep.validate() && email.validate() && nome.validate()){
      console.log('enviou');
    } else{
      console.log("não enviou")
    }
  }

  return (
    <div className="App">
           <form onSubmit={handleSubmit}>
               <Input 
                label="Nome"
                id="nome" 
                type="text"
                {...nome}/>

                <Input 
                label="Sobrenome"
                id="sobrenome" 
                type="text"
                {...sobrenome}/>

              <Input 
                label="CEP"
                id="cep" 
                type="text"
                placeholder="00000-000"
                {...cep}/>
                
                <Input 
                label="E-mail"
                id="email" 
                type="text"
                {...email}/>
                <button>Enviar</button>
            </form>
    </div>
  );
}

export default App;
