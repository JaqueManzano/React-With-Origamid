import React from "react";

const Form = ({usuario, setUsuario}) => {

    const formFields = [
    {
        id: 'nome',
        label: 'Nome',
        type: 'text'
    },
    {
        id: 'email',
        label: 'email',
        type: 'text'
    },
    {
        id: 'senha',
        label: 'senha',
        type: 'password'
    },
    {
        id: 'cep',
        label: 'cep',
        type: 'text'
    },
    {
        id: 'rua',
        label: 'rua',
        type: 'text'
    },
    {
        id: 'numero',
        label: 'numero',
        type: 'number'
    },
    {
        id: 'bairro',
        label: 'bairro',
        type: 'text'
    },
    {
        id: 'cidade',
        label: 'cidade',
        type: 'text'
    },
    {
        id: 'estado',
        label: 'estado',
        type: 'text'
    }
]

const forms = formFields.reduce((acc, field) =>{
    console.log(acc)
    return {
        ...acc,
        [field.id]: ''
    }
},{})


const [response, setResponse] = React.useState();
function handleSubmit(event) {
    event.preventDefault();
       try{
         fetch('https://ranekapi.origamid.dev/json/api/usuario',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(usuario),
        }).then(response =>{
            setResponse(response);
        })
        alert('Usuário cadastrado com sucesso.')    
       }catch(error){
        alert('Erro ao cadastrar o usuário: '+ error)
       }
    }

    return <form onSubmit={handleSubmit}>   
    {formFields.map(({id, label, type}) =>(
       <div key={id}>
        <label htmlFor={id}>{label}</label>
            <input 
            id={id} 
            type={type}
            value={usuario[id]}
            onChange={(event) =>{ setUsuario({...usuario, [id]: event.target.value}) }}
        /></div>
    ))}
    {response && response.ok && <p>
        Formulário Enviado
    </p> 
    }
        <button>Enviar</button>
    </form>
}

export default Form;