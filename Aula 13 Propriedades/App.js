
const Titulo = ({cor, texto, children}) =>{
    return <h1 style={{color: cor}}>{texto} {children}</h1>
}
const App = () =>{

    return(
       <div>
            <div> 
                <p> ** Exemplo com children e props </p>
                <Titulo cor="red" texto="Meu título 1">Outro children <p>Um children tag P</p></Titulo>
                <Titulo cor="blue" texto="Meu título 2"/>
                <Titulo>Meu título com children</Titulo>
            </div>
       </div>
     
    )
}
