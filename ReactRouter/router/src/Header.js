import {NavLink, useLocation} from 'react-router-dom'
import './Header.css'
import React
 from 'react';
const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('mudou a rota')
  },[location]);

  return (
    <nav>
      <NavLink to="/" end activeStyle={{ color: 'tomato' }}>Home</NavLink> |
      <NavLink to={"sobre"} activeStyle={{ color: 'tomato' }}>Sobre</NavLink> |
      <NavLink to={"login"} activeStyle={{ color: 'tomato' }}>Login</NavLink>
    </nav>
  )
}

export default Header
