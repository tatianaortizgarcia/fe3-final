import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './detail.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [ dentist, setDentists] = useState({})
  const {id} = useParams();
  const url = 'https://jsonplaceholder.typicode.com/users/'+id;

  useEffect(() => {
    const fetchDentist = async () => {
      const response = await axios(url)
      setDentists(response.data)
    }
    fetchDentist()
  }, []);


  return (
    <div>
      <h1>Detail Dentist</h1>
      <div class="container">
        <h3>{dentist.name ? dentist.name : 'Select a user'}</h3>
        <p><b>Email: </b>{dentist.email ? dentist.email : 'No email'}</p>
        <p><b>Phone: </b>{dentist.phone ? dentist.phone : 'No Phone'}</p>
        <p><b>Website: </b>{dentist.website ? dentist.website : 'No website'}</p>
      </div>
    </div>
  )
}

export default Detail