/* eslint-disable default-case */
export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_DENTISTS':
            return {...state, list: action.payload}
        case 'GET_DENTIST':
            return {...state, dentistDetail: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'CHANGE_THEME':
            // agregar función para eliminar favorito
            return {...state, isDarkTheme: action.payload}
    }
}