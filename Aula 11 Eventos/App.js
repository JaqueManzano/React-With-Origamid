const App = () =>{
  
    function handleClick(event) {
        console.log(event.target)
    }

    window.addEventListener('scroll', handleScroll)

    function handleScroll(event) {
        console.log(event)    
    }

    return(
        <div style={{height: '200vh'}}>
        <button onClick={handleClick} onMouseMove={handleClick}>
            Clique
        </button>
        <button onClick={(event) => {alert(event.target.innerText)}}>
            Clique Aqui
        </button>
        </div>
     
    )
}