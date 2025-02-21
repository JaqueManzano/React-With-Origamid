const Button = (props) => {
    console.log(props)
    return (
        <button>
          Click
        </button>
      )
}

const Input = ({id, label, ...props}) => {
    return (
        <div style={{margin: '1rem 0'}}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}></input>
        </div>
    )
}
const Form = () => {
    const array = ['Item 1', 'Item 2']
    return  (
        <div>
            <Input id="email" type="text" label="email" required/>
            <Input id="password" type="password" label="Password"/>
            <Button items={array}/>
        </div>
    )   
}
const App = () =>{

    return(
       <div>
            <div> 
                <Form/>
            </div>
       </div>
     
    )
}
