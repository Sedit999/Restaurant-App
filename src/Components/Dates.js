import React from "react";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const horasDisponibles = ["9:00","9:15","9:30","9:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","13:00","13:15","13:30","13:45","14:00","14:15","14:30","14:45","15:00","15:15","15:30","15:45","16:00", "16:15","16:30","16:45","17:00","17:15","17:30","17:45","18:00", "18:15","18:30","18:45","19:00","19:15","19:30","19:45","20:00","20:15","20:30","20:45","21:00","21:15","21:30","21:45","22:00","22:15","22:30","22:45","23:00","23:15","23:30"];

const getData =async () => {
 const snapshot= await getDocs(collection(db,'reservaciones'))
    console.log(snapshot.docs.map((doc) => doc.data()))
}
function Reservaciones(fecha){
    const result = getData.filter((e)=> e.Fecha === `${fecha}`)
    const horariosOcupados = result.map((e)=>e.Hora)
    const nuevasHoras = horasDisponibles.map(e =>{
        if(!e in horariosOcupados){
        return e
    }
    })
    console.log(nuevasHoras)
}

function Dates(){
    Reservaciones()
    return(
        <></>
    )
}