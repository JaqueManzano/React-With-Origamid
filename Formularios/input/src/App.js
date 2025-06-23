import React from "react";


const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event)
  }

  function handleChange({target}) {
    const {id, value} = target;
    setForm({...form, [id]: value})
    console.log(form)
  }

  return (
    <form onSubmit={handleSubmit}>
       <label htmlFor="nome">Nome</label>
        <input type="text"
        id="nome"
        name="nome"
        value={form.nome} 
        onChange={handleChange}/>

        <label htmlFor="email">Email</label>
        <input type="email"
        id="email"
        name="email"
        value={form.email} 
        onChange={handleChange}/>
        <button>Enviar</button>
    </form>
  );
}

export default App;
