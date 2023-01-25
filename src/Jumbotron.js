import React from "react";

function Jumbotron(){
    return(
        <React.Fragment>
            <jumbotron class="jumbotron">
                <div class="contenedorInfoCard cards">
                    <div id="infoCard">
                        <p id="infoCard_info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum blanditiis molestiae iste tempora obcaecati repellat aperiam sed hic, perferendis culpa?</p>
                        <a id="infoCard_Menu">
                            <div >
                            Revisa nuestro menú
                            </div>
                        </a>
                    </div>
                </div>

                <div class="reservacion cards">
                    <p id="parrafoReservacion">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum blanditiis molestiae iste tempora obcaecati repellat aperiam sed hic, perferendis culpa?</p>
                    <form id="reservacionFormulario">
                        <label>Nombre</label>
                        <input type="text" name="nombreCliente"></input><br/>
                        <label>Teléfono</label>
                        <input type="tel" name="telefono" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" required></input><br/>
                        <label>Correo</label>
                        <input type="email" name="email" required></input><br/>
                        <input type="submit" value="Enviar"></input>
                    </form>
                </div>
            </jumbotron>
        </React.Fragment>
    )
}

export default Jumbotron;