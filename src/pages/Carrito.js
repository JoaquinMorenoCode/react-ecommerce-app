import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import './Carrito.css';


export default function Carrito() {
    const [itemsCarrito, setItemCarrito] = useState([])
    const [montoTotal, setMontoTotal] = useState(0);
    useEffect(() => {
        leerDatosCarrito();



    }, []) //uso de 2 corchetes para evitar un bucle infinito 


    const leerDatosCarrito = async () => {
        let datosCarrito = await JSON.parse(sessionStorage.getItem("carrito"));
        setItemCarrito(datosCarrito);
        calcularTotal(datosCarrito);

    }

    const reducirPaqueteCarrito = (item) => {

        for (let i = 0; itemsCarrito.length; i++) {
            if (itemsCarrito[i].id == item.id)
                if (itemsCarrito[i].cantidad > 1) {
                    itemsCarrito[i].cantidad--
                    sessionStorage.setItem("carrito", JSON.stringify(itemsCarrito));

                } else {
                    itemsCarrito.splice(i, 1)
                    sessionStorage.setItem("carrito", JSON.stringify(itemsCarrito));

                }

            leerDatosCarrito();


        }




    }

    const eliminarItemCarrito = (item) => {
        //console.log(item);
        let carritoMenos = itemsCarrito.filter(itemC => itemC.id !== item.id)
        setItemCarrito(carritoMenos);

        sessionStorage.setItem("carrito", JSON.stringify(carritoMenos));
        calcularTotal(carritoMenos);

    }


    const aumentarItemCarrito = (item) => {

        for (let i = 0; itemsCarrito.length; i++) {
            if (itemsCarrito[i].id == item.id)

                itemsCarrito[i].cantidad++
            sessionStorage.setItem("carrito", JSON.stringify(itemsCarrito));
            leerDatosCarrito();

        }


    }

    const vaciarCarrito = () => {
        //console.log(item);
        sessionStorage.removeItem("carrito");

        setItemCarrito(null);
        setMontoTotal(0);
       

    }


    const dibujarTabla = () => {
        return (
            <div className='container'>
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Tipo</th>
                            <th>Categoria</th>
                            <th>Fecha</th>
                            <th>Destino</th>
                            <th>Cantidad</th>
                            <td>Precio</td>

                            <th>Subtotal</th>
                            <th></th>



                        </tr>
                    </thead>
                    <tbody>
                        {itemsCarrito.map(item =>
                            <tr key={item.id}   >
                                <td>{item.id}</td>
                                <td>{item.tipo}</td>
                                <td>{item.categoria}</td>
                                <td style={{ width: 150 }}>{item.fecVuelta == "" ? item.fecIda : item.fecIda + " - " + item.fecVuelta}</td>
                                <td>{item.Destino}</td>
                                <td><i className="bi bi-dash-circle-fill" onClick={() => reducirPaqueteCarrito(item)} style={{paddingRight: 10 }}></i> {item.cantidad} <i className="bi bi-plus-circle-fill" onClick={() => aumentarItemCarrito(item)} style={{ "padding-left": 10 }}></i></td>
                                <td>${item.precio}</td>
                                <td>${item.precio * item.cantidad}</td>

                                <td><i className="bi bi-x-circle-fill" onClick={() => eliminarItemCarrito(item)}></i></td>

                            </tr>




                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>



                            <th className='text-end'>Total</th>
                            <th className='text-end'> $ {montoTotal.toFixed(2)}</th>

                        </tr>
                    </tfoot>
                </table>


                <button className='btn btn-primary' onClick={() => vaciarCarrito()} > Vaciar Carrito</button>
            </div>

        )
    }

    const calcularTotal = (datos) => {

        //una forma de hacerlo:
        // let acumulador = 0;
        // for(let i=0; i<datos.length; i++){
        //     acumulador += datos[i].cantidad * datos[i].precio;
        // }
        //setMontoTotal(acumulador);

        //2da fomra

        let totalCarrito = datos.reduce((acumulador, item) => acumulador + item.cantidad * item.precio, 0)

        setMontoTotal(totalCarrito);
    }


    return (
        <div className='mainCarrito'>

            <h1 className='carritoTitle'>CARRITO</h1>
            <br></br>
            <br></br>

            {itemsCarrito == null ? <h4 className='carritoTitle'>EL CARRITO ESTA VACIO</h4> : dibujarTabla()}

        </div>
    )
}
