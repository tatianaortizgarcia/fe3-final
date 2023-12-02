import React from 'react'
import logo from '../../img/DH.png'
import './footer.css';

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img class="dhimg" src={logo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
