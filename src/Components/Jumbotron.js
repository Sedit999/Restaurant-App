import React from "react";
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {agregar} from './ManejoFirestore';

let reservaciones;
let horariosOcupados;

let horasDisponibles = []
const horasPosibles = ["9:00","9:15","9:30","9:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","13:00","13:15","13:30","13:45","14:00","14:15","14:30","14:45","15:00","15:15","15:30","15:45","16:00", "16:15","16:30","16:45","17:00","17:15","17:30","17:45","18:00", "18:15","18:30","18:45","19:00","19:15","19:30","19:45","20:00","20:15","20:30","20:45","21:00","21:15","21:30","21:45","22:00"];

function Jumbotron({array}){
    const valoreIniciales = {
        Nombre: '',
        Telefono: '',
        Correo: '',
        Personas: '',
        Fecha: '',
        Hora: ''
    }

    const[fechaSeleccionada, setFechaSeleccionada] = useState();
    const[valores, setValores] = useState(valoreIniciales);

    const handleInputChange = e =>{
        const {name, value} = e.target;
        setValores({...valores, [name]: value})
    }

    const handleSubmit = e=> {
        e.preventDefault();
        agregar(valores);
        setTimeout(()=>{
            window.location.href = window.location.href;
        },2000)
        
    }

    const getHorarios = async () => {
        horasDisponibles = [];
        function Reservaciones(fechasReservadas) {
            reservaciones = fechasReservadas.map((doc) =>{return doc.data()})
        } 
        Reservaciones(array)
        await reservaciones.forEach((element) => {
            element.Fecha === fechaSeleccionada ? horariosOcupados.push(element.Hora) : horariosOcupados = [true];
         
        }
            )
            horariosOcupados === undefined ? horariosOcupados = ['']:
            horariosOcupados.forEach((ocupado)=>{
                horasPosibles.forEach((posible)=>{
                    if(posible !== ocupado){
                        
                    horasDisponibles.push(posible)
                        
                        
                    }
                })
               })
              
    }

useEffect(() =>{
    getHorarios();
},[fechaSeleccionada])

    return(
        <React.Fragment>
            <main className="jumbotron">

                <div className="contenedorInfoCard cards">
                    <div id="infoCard">
                        <p id="infoCard_info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum blanditiis molestiae iste tempora obcaecati repellat aperiam sed hic, perferendis culpa?</p>
                        <Link to={'menu'}id="infoCard_Menu">
                            <div >
                            Revisa nuestro menú
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="reservacion cards">
                    <div id="cartaReservacion">
                        <h2 id="tituloReservacion">¿Quieres hacer una reservación?</h2>
                        <p id="parrafoReservacion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum blanditiis molestiae iste tempora obcaecati repellat aperiam sed hic, perferendis culpa?</p>
                    </div>
                    <form id="reservacionFormulario" onSubmit={handleSubmit}>
                        <div id="datos">
                            <label>Nombre</label>
                            <input id="nombre" type="text" name="Nombre" onChange={handleInputChange} required></input><br/>
                            <label>Teléfono</label>
                            <input type="tel" name="Telefono" onChange={handleInputChange} required></input><br/>
                            <label>Correo</label>
                            <input type="email" name="Correo" onChange={handleInputChange} required></input><br/>
                            <label>Personas</label>
                            <select defaultValue="Selecciona" name="Personas" onChange={handleInputChange} required>
                                <option > Seleciona </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div id="fechaYhora">
                            <label>Fecha</label>
                            <input id="fecha" onChange={event => setFechaSeleccionada(event.target.value)}
                            onChangeCapture={handleInputChange} type="date" name="Fecha" required></input><br/>
                            <label>Hora</label>
                            <select id="horarios" name="Hora" onChange={handleInputChange} defaultValue="Selecciona" required>
                                <option> Seleciona </option>
                                {
                                   horasDisponibles.map((e)=>{
                                    return(<option>{e}</option>)
                                   })
                                }  
                                
                            </select><br/>
                            <input id="enviar" type="submit" value="Enviar" ></input><br/>
                        </div>
                    </form>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Jumbotron;