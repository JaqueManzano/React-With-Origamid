import React from "react";

const types = {
    p1: {
        regex: /^\d{5}-?\d{3}$/,
        message: 'Cep inválido.'
    },
}


const useFormQuestions = (respostas) => {
    const [value, setValue] = React.useState('');

function validate(value) {
 
}

  return {
   value, 
    setValue, 
    onBlur: () => validate(value),
    validate: () => validate(value)  
  }
}

export default useFormQuestions
