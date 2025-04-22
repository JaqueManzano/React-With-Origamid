import React from "react";


function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;   
  }

  return c;
}

function App() {
  const [contar, setContar] = React.useState(0);
  //const valor = React.useMemo(() => {
  //  const localItem = window.localStorage.getItem("product");
  //  console.log("Aconteceu o memo");
  //  return localItem;
  //},[]);

  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(),[]);

  console.log(performance.now() - t1);

  //console.log(valor)
  return (
    <button onClick={() => setContar(contar + 1)}>
      {contar}
    </button>
  );
}

export default App;
