import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* <Head title="Home" description="Essa é a descrição da Home"/> */ }
      <Helmet>
        <title> Dogs | Home </title>
        <meta name="description" content="Essa é a descrição da Home" ></meta>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </Helmet> 
      <h1>Esta é a Home</h1>
            <Link to="produto/notebook">Notebook</Link> { }
            <Link to="produto/smartphone">Smartphone</Link>
    </div>
  )
}

export default Home
