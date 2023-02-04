import React from "react";

let bebidas, cafeCaliente, cafeFrio, sandwiches

function Menu({array}){
        //bebidas
        function menuBebidas(menu) {
            bebidas = menu[0].map((doc) =>{return doc.data()})
        } 
        //cafe caliente
        function menuCafeCaliente(menu){
        cafeCaliente = menu[1].map((doc) =>{ return doc.data()})
        }
        //cafe frio
        function menuCafeFrio(menu){
        cafeFrio = menu[2].map((doc) =>{ return doc.data()})
        }
        //sandwiches
        function menuSandwiches(menu){
        sandwiches = menu[3].map((doc) =>{ return doc.data()})
        }

        menuBebidas(array)
        menuCafeCaliente(array)
        menuCafeFrio(array)
        menuSandwiches(array)

    return(
        <React.Fragment>
            <main className="jumbotronMenu">
                    <div className="cartaMenu">
                        <h2 className="titulosMenu">Café caliente</h2>
                        <ol>
                            {
                                cafeCaliente.map((e) =>{
                                    return(
                                        <li className="opcMenu">
                                            <h3>{e.nombre}</h3>
                                            <p>{e.descripcion}</p>
                                            <span>{e.precio}</span>
                                            </li>
                                      )   
                                } )   
                            }
                        </ol>
                    </div>
                    <div className="cartaMenu">
                        <h2 className="titulosMenu">Café frío</h2>
                        <ol>
                            {
                                cafeFrio.map((e) =>{
                                    return(
                                        <li className="opcMenu">
                                            <h3>{e.nombre}</h3>
                                            <p>{e.descripcion}</p>
                                            <span>{e.precio}</span>
                                            </li>
                                      )   
                                } )   
                            }
                        </ol>
                    </div>
                    <div className="cartaMenu">
                        <h2 className="titulosMenu">Bebidas</h2>
                        <ol>
                            {
                                bebidas.map((e) =>{
                                    return(
                                        <li className="opcMenu">
                                            <h3>{e.nombre}</h3>
                                            <p>{e.descripcion}</p>
                                            <span>{e.precio}</span>
                                            </li>
                                      )   
                                } )   
                            }
                        </ol>
                    </div>
                    <div className="cartaMenu">
                        <h2 className="titulosMenu">Sandwiches</h2>
                        <ol>
                            {
                                sandwiches.map((e) =>{
                                    return(
                                        <li className="opcMenu">
                                            <h3>{e.nombre}</h3>
                                            <p>{e.descripcion}</p>
                                            <span>{e.precio}</span>
                                            </li>
                                      )   
                                } )   
                            }
                        </ol>
                    </div>
            </main>
        </React.Fragment>
    )
}
export default Menu;