import React, { useEffect, useState } from 'react'
import './PaquetesDetalle.css'
import { Link } from 'react-router-dom'

export default function PaqueteDetalle
    (props) {

    const [listaPaquetes, setListaPaquetes] = useState([])
    const [itemPaquete, setPaquete] = useState([])

    useEffect(() => {
        leerServicio(props.paquetes);

    }, [props.paquetes])


    const leerServicio = (paisDestino) => {
        const rutaServicio = "https://my-json-server.typicode.com/joaquinm683/ep03_PW2/paquetes?paisDestino=" + paisDestino;
        console.log("la ruta es:" + rutaServicio)
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {

                console.log("la data es" + data)
                setListaPaquetes(data);

            });
    }

    const seleccionaPaquete = (item) => {
        // <Link to={'/paqueteSeleccionado' + item.id}></Link>

        console.log("seleccionarPaquete dice: " + item.precio);
        
        setPaquete(item);
        
     }

     const agregarCarrito = (item) => {
        item.cantidad = 1;
        
        let carrito = []; //crea un arreglo

        if (sessionStorage.getItem("carrito")) {

            carrito = JSON.parse(sessionStorage.getItem("carrito"));
            let index = -1;
            for (let i = 0; i < carrito.length; i++) {
                let itemcarrito = carrito[i];
                if (itemcarrito.id === item.id) {
                    index = i;
                    break;
                }
            }


            if (index == -1) {
                carrito.push(item); //Agrega un elemento a un array
                sessionStorage.setItem("carrito", JSON.stringify(carrito));
            } else {

                let iCarrito = carrito[index]
                iCarrito.cantidad++
                carrito[index] = iCarrito;
                console.log(carrito[index].cantidad);
                sessionStorage.setItem("carrito", JSON.stringify(carrito));
            }

        } else {

            carrito.push(item); //Agrega un elemento a un array
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
        }
        
    }


     const dibujarTabla = () => {
        return (
           
                <>
                <div className='sticky-top listPaquete'>
                    <div className='detalleTitle'>
                        <h2 >NUESTROS PAQUETES A</h2> <br /> <h1>{props.paquetes== "Spain"   ? "ESPAÑA" : props.paquetes.toUpperCase()}</h1>
                        
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Tipo</th>
                                <th scope="col">Categoria</th>
                                <th style={{width : 150}} scope="col">Fecha</th>
                                <th scope="col">Destino</th>
                                <th scope="col">Precio</th>
                                <th scope="col"></th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>
        
                            {listaPaquetes.map(item =>
                               
                                <tr key={item.id}   >
                                    <td>{item.tipo}</td>
                                    <td>{item.categoria}</td>
                                    <td style={{width : 150}}>{item.fecVuelta == "" ? item.fecIda : item.fecIda + " - " + item.fecVuelta}</td>
                                    <td>{item.Destino}</td>
                                    <td>${item.precio}</td>
                                    <td><i className="bi bi-cart-plus" onClick={ () => agregarCarrito(item)}></i></td>
                                    <Link to={'/paqueteSeleccionado/' + item.id} className='Tbrows'>
                                    <td>Ver mas</td>
                                    </Link>
                                </tr>
                              
                            )}
        
                        </tbody>
                    </table>
        
        
        
        
                </div></>
           
        )
    }






    return (
        <>{props.paquetes == null ? "" :  dibujarTabla ()}</>
       

    )
}
