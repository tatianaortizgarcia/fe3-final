import axios from 'axios'
import { useReducer } from 'react'
import {createContext, useContext, useEffect } from 'react'
import { reducer } from '../reducers/reducer'

const DentistStates = createContext()

const initialState = {
    list: [],
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    dentistDetail: {},
    isDarkTheme: false
}

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])

    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_DENTISTS', payload: res.data})) 
    }, [])

    return (
        <DentistStates.Provider value={{
            state, dispatch,
            }}>
            {children}
        </DentistStates.Provider>
    )
}

export default Context

export const useDentistStates = () => useContext(DentistStates)