import React from "react";
import { useDentistStates } from '../../Context/Context'
import Card from "../../Components/Card/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useDentistStates();
  const dentists = state.favs;

  return (
    <>
      <h1>Dentistas Favoritos</h1>
     <div className='card-grid'>
        {dentists.map((dentist) => (<Card item={dentist} isDark={state.isDarkTheme} />))}
      </div>
    </>
  );
};

export default Favs;
