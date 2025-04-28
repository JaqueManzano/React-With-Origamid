import React, { useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) =>{
    
    const [dados, setDados] = React.useState();

    useEffect(() => {
        async function fetchData() {
            let response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
            let values = await response.json();
            setDados(values);
        }
    
        fetchData();
    }, []);
    
    function limparDados() {
        setDados([])
    }

     return <GlobalContext.Provider value={{dados, limparDados}}>
            {children}
        </GlobalContext.Provider>
}