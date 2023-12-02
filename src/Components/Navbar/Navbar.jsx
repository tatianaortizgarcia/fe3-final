import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../../Context/Context'
import './navbar.css';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useDentistStates()
  const theme = state.isDarkTheme ? 'dark' : 'light';

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav>
      <div class="container-links">
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/contacto'><h3>Contacto</h3></Link>
        <Link to='/favs'><h3>Destacados</h3></Link>
      </div>
      <div class="container-button">
      <button class="button-theme" onClick={() => dispatch({ type: 'CHANGE_THEME', payload: !state.isDarkTheme})}>
      { state.isDarkTheme ? '🌜' : '🌞'}
      </button>
      </div>
    </nav>
  )
}

export default Navbar