import React from "react";
import imgDentist from '../../img/doctor.jpg'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../../Context/Context'
import './card.css'

const Card = ({ item, isDark }) => {
  const {state, dispatch} = useDentistStates()
  console.log(state)
  const findFav = state.favs.some((fav) => fav.id === item.id)

  console.log(state.favs)
  const addFav = () => {
    if(findFav){
      alert('Ese personaje ya está agregado a favoritos')
    } else {
      dispatch({type: 'ADD_FAV', payload: item})
    }
  }

  return (
    <div className="card">
    <Link to={`/dentist/${item.id}`}>
        <img src={imgDentist} class="dentistImg" alt="doctor"/>
        <h3>{item.name}</h3>
        <h4>{item.username}</h4>
        <h4>{item.id}</h4>
    </Link>
    <button onClick={addFav} class="favButton">{findFav ? '🌟' : '💙'}</button>
    </div>
  );
};

export default Card;
