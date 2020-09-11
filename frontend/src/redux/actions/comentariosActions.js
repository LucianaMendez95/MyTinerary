import Axios from 'axios';

const comentariosActions = {
   
    nuevoComentario: (nuevoComentario, idItinerario) =>{
        return async (dispatch, getState) => {
         const respuesta = await Axios.put(`http://127.0.0.1:4000/api/itinerarios/${idItinerario}`, nuevoComentario)
         if (!respuesta.data.success) {
           alert(respuesta.data.error)
         }else{
           dispatch({
            type: 'NEW_COMENT',
            payload: {
              foto:respuesta.data.foto,
              usuario:respuesta.data.usuario,
              token:respuesta.data.token,
              comentario:respuesta.data.comentario,
              success: respuesta.data.success
            }
        })
        }    
        }
  
      },
  
      modificarComentario: (nuevoComentario, idItinerario, indexComentario) =>{
        return async (dispatch, getState) => {
            const infoNuevoComentario = {nuevoComentario, indexComentario}
            const respuesta = await Axios.put(`http://127.0.0.1:4000/api/modificarcomentario/${idItinerario}`, infoNuevoComentario)
        }
      },

      eliminarComentario: (idItinerario, index) =>{
        return async (dispatch, getState) => {
            const infoindex = {index}
            const respuesta = await Axios.put(`http://127.0.0.1:4000/api/eliminarcomentario/${idItinerario}`, infoindex)
            if (!respuesta.data.success) {
                alert("deleted")
              }
        }
      },

      sumarlike: (idItinerario, like, token, usuario) =>{
        return async (dispatch, getState) => {
            console.log("cambiar like",idItinerario, like)
            const infodellike = {like, token, usuario}
            const respuesta = await Axios.put(`http://127.0.0.1:4000/api/sumarlike/${idItinerario}`, infodellike)
            if (!respuesta.data.success) {
               alert(respuesta.data.error)
            }
        }

      },

      restarlike: (idItinerario, like, token, usuario) =>{
        return async (dispatch, getState) => {
            console.log("cambiar like",idItinerario, like)
            console.log("soy el token", token)
            const infodellike = {like, token, usuario}
            const respuesta = await Axios.put(`http://127.0.0.1:4000/api/restarlike/${idItinerario}`, infodellike)
            if (!respuesta.data.success) {
               alert(respuesta.data.error)
            }
        }

      }
      
    
}


export default comentariosActions
