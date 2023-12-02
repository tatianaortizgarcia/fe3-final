import React from 'react'
import { useDentistStates } from '../../Context/Context'
import Card from '../../Components/Card/Card'

const Home = () => {
  const {state} = useDentistStates();
  const dentists = state.list;

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => (<Card item={dentist} isDark={state.isDarkTheme} />))}
      </div>
    </main>
  )
}

export default Home