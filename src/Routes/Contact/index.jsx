import React from 'react'
import Form from '../../Components/Form/Form'
import './contact.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div >
      <div class="containerContact">
      <h2>Quieres saber mas de nosotros?</h2>
      <p>Envianos tus datos y nosotros te contactaremos</p>
      </div>
      <Form/>
    </div>
  )
}

export default Contact