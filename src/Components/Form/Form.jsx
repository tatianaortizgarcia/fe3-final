import React, {useState } from "react";
import './form.css'

const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

    const [cliente, setCliente] = useState({
      nombre: '', 
      email: ''
  })
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()
      if(cliente.nombre.length > 5 && validEmail.test(cliente.email)){
          setShow(true)
          setError(false)
      } else {
          setError(true)
      }
  }
return (
  <div>
      <form onSubmit={handleSubmit}>
          <label>Nombre Completo</label>
          <input class="text" type="text" value={cliente.nombre} onChange={(event) => setCliente({...cliente, nombre: event.target.value.trimStart()})}/>
          <label>Email</label>
          <input class="text" type="text" value={cliente.email} onChange={(event) => setCliente({...cliente, email: event.target.value.trimStart()})}/>
          <button class="button">Enviar</button>
      </form>
      {show ? 
          <h1>Gracias {cliente.nombre}, te contactaremos cuanto antes via email</h1>
      :
          null
      }
      {error && <h5 style={{color: 'red'}}>Por favor verifique su información nuevamente</h5>}

  </div>
)
};

export default Form;
