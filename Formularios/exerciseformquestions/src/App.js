import useFormQuestions from "./Hooks/useFormQuestions";
import { useState } from "react";

const questions = [
    {
        pergunta: 'Qual método é utilizado para criar componentes?',
        options: [
            'React.makeComponent()',
            'React.createComponent()',
            'React.createElement()'
        ],
        resposta: 'React.createElement()',
        id: 'p1'
    },
    {
        pergunta: 'Como importamos um componente externo?',
        options: [
            'import Component from "./Component"',
            'require("./Component")',
            'import "./Component"'
        ],
        resposta: 'import Component from "./Component"',
        id: 'p2'
    },
    {
        pergunta: 'Qual hook não é nativo?',
        options: [
            'useEffect()',
            'useFetch()',
            'useCallback()'
        ],
        resposta: 'useFetch()',
        id: 'p3'
    },
    {
        pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
        options: [
            'set',
            'get',
            'use'
        ],
        resposta: 'use',
        id: 'p4'
    }
]

function App() {
  const [countErrors, setCountErrors] = useState(0);
  const [respostas, setRespostas] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: ''
});
  
  const p1 = useFormQuestions('p1');
  const p2 = useFormQuestions('p2');
  const p3 = useFormQuestions('p3');
  const p4 = useFormQuestions('p4');

  function handleSubmit({event}){
    event.preventEvent();

    if(!p1.validate()){
      setCountErrors(countErrors + 1);
    }

   if(!p2.validate()){
      setCountErrors(countErrors + 1);
    }

    if(!p3.validate()){
      setCountErrors(countErrors + 1);
    }

    if(!p4.validate()){
      setCountErrors(countErrors + 1);
    }
  }

  console.log(respostas)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          {
            <div>
               <input key={questions[0]} 
                type="radio" 
                id={questions[0].id} 
                name={questions[0].pergunta} 
                {...p1}  
                 />               
                <label htmlFor={questions[0].id}>{questions[0].id}</label><br/>

            </div>
          }
        <button>Próxima</button>
      </form>
    </div>
  );
}

export default App;
