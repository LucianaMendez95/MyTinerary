import axios from 'axios';

const ciudadesActions = {
    getcities: () =>{
        return async (dispatch, getState) => {
            const respuesta = await axios.get('http://127.0.0.1:4000/api/ciudades')
            const lista = respuesta.data.ciudades
            dispatch({
              type: 'GETCITIES',
              payload: lista
             })
        }
    },

    getcity: (idABuscar) =>{
        return async (dispatch, getState) => {
            const response = await axios.get(`http://127.0.0.1:4000/api/ciudad/${idABuscar}`)
            const ciudad =  response.data.ciudadBuscada
            dispatch({
              type: 'GETCITY',
              payload: ciudad
             })
        }
    },

    filtrarCiudades: (valorDeseado) => {
        return async(dispatch, getState) => {
            dispatch({
                type:'FILTRARCIUDADES',
                payload: valorDeseado
            })
        }
    }
}

export default ciudadesActions



