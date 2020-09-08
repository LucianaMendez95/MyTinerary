
const initialState = {
    ciudades:null,
    city: {},
    ciudadesFiltradas:[]
}


const ciudadesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GETCITIES' :
            return {
                ...state,
                ciudades: action.payload,
                ciudadesFiltradas: action.payload
            }

         case 'GETCITY' :
                return {
                    ...state,
                    city: action.payload,
                }
    
         case 'FILTRARCIUDADES' :
            const filtrado = state.ciudades.filter(ciudad => ciudad.ciudad.toLowerCase().indexOf(action.payload) === 0)
                return {
                    ...state,
                    ciudadesFiltradas: filtrado
                }   
            

        default:
            return state

    }
}


export default ciudadesReducer