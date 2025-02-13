const Header = () => {
    return (
        <header>
            Header
        </header>
    );
};

const Footer = () => {
    return (
        <footer>
            <p>Todos os direitos reservados</p>
        </footer>
    );
};


const Form = () => {
  return (
    <form>
        <p>
            <label htmlFor='nome'>Nome</label>
            <Input/>
        </p>
        <p>
            <label htmlFor='email'>E-mail</label>
            <Input/>
        </p>  
        <Button/>
    </form>
  )
}

const Input = () => {
    return ( 
        <input type='text'/>
    )
}
  

const Button = () => {
  return (
    <button>Enviar</button>
  )
}
  
  
const Teste = () => {
    const active = false;
    if(active){
        return <p>Teste</p>;
    }else{
        return null;
    }
}

const App = () =>{

    return(
        <React.Fragment>
            <Teste/>
            <Header/>
            <Form/>
            <Footer/>
        </React.Fragment>
     
    )
}
