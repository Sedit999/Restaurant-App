import React from "react";
import db from '../firebase'
import {collection, addDoc} from "firebase/firestore"

export const agregar = async(objetoParaMandar) => {
        await addDoc(collection(db, 'reservaciones'), objetoParaMandar)
        //getMensajes(db, 'reservaciones')
        console.log('agregado con exito')
      }
