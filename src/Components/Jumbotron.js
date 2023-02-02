import React from "react";
import db from "../firebase";
import {collection, getDocs} from "firebase/firestore"
import {Link} from 'react-router-dom';

const getData = async () => {
    const snapshot = await getDocs(collection(db,'reservaciones'))
    console.log(snapshot.docs.map((doc) => doc.data()))
}


function Jumbotron(){
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
                    <form id="reservacionFormulario">
                        <div id="datos">
                            <label>Nombre</label>
                            <input id="nombre" type="text" name="nombreCliente" required></input><br/>
                            <label>Teléfono</label>
                            <input type="tel" name="telefono" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" required></input><br/>
                            <label>Correo</label>
                            <input type="email" name="email" required></input><br/>
                            <label>Personas</label>
                            <select defaultValue="Selecciona" required>
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
                            <input id="fecha" type="date" required></input><br/>
                            <label>Hora</label>
                            <select id="horarios" defaultValue="Selecciona" required>
                                <option > Seleciona </option>
                                <option value="1">1</option>
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