import React from "react";

const useFetch = () =>{
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const set = new Set();

    // Usado para criar apenas uma vez o método, mesmo que o componente seja renderizado várias vezes
    const request = React.useCallback(async (url, options) => {
        let response;
        let json;
    try{
        setError(null);
        setLoading(true)
        response = await fetch(url, options);
        json = await response.json();
    }catch(erro){
        json = null;
        setError(erro)
    }    
        finally{
        setData(json);
        setLoading(false)
        return {response, json}
        }
    },[]);

    set.add(request);
    //console.log(set);
    return {data, error, loading, request}
}

export default useFetch;