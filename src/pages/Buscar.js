import React, { useEffect, useState } from 'react'
import './Buscar.css'
import { Link } from 'react-router-dom'


export default function Buscar() {
    const [listaPaquetes, setListaPaquetes] = useState([])
    const [datos,setDatos] = useState([]) 

    const[textoBuscar, setTextoBuscar] = useState("");
    // const [itemPaquete, setPaquete] = useState([])
    useEffect(() => {
        leerServicio()
    }, [])



    const leerServicio = () => {
        const rutaServicio = "https://my-json-server.typicode.com/joaquinm683/ep03_PW2/paquetes?";
        console.log("la ruta es:" + rutaServicio)
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {

                console.log("la data es" + data)
                setListaPaquetes(data);
                setDatos(data);

            });
    }


    const dibujarTabla = () => {
        return (

            <>
                <div className='listPaquete'>

                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>

                                <th scope="col">Tipo</th>
                                <th scope="col">Categoria</th>
                                <th  scope="col">Fecha</th>                          
                                <th scope="col">Pais Destino</th>
                                <th scope="col">Destino</th>
                                <th scope="col">Precio</th>


                            </tr>
                        </thead>
                        <tbody>

                            {datos.map(item =>

                                <tr key={item.id}   >
                                    <td>{item.id}</td>

                                    <td>{item.tipo}</td>
                                    <td>{item.categoria}</td>
                                    <td >{item.fecVuelta == "" ? item.fecIda : item.fecIda + " - " + item.fecVuelta}</td>
                                 
                                    <td>{item.paisDestino}</td>

                                    <td>{item.Destino}</td>
                                    <td>${item.precio}</td>


                                </tr>

                            )}

                        </tbody>
                    </table>




                </div></>

        )
    }


    const buscar = () =>{

        let datosFiltrados = listaPaquetes.filter(item => {

            return textoBuscar.length ===1 ? true : item["id"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
            item["tipo"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
            item["categoria"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
            item["fecVuelta"]=== "" ? item["fecIda"].indexOf(textoBuscar) > -1: (item["fecIda"] + " - " + item["fecVuelta"]).indexOf(textoBuscar) > -1 ||
            item["paisDestino"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
            item["Destino"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 ||
            item["precio"].toLowerCase().indexOf(textoBuscar.toLowerCase()) > -1 





            




        })

        setDatos(datosFiltrados)
    }


    return (
        <div className='mainBuscar'>


            <div className='container'>
                <div className='detalleTitle'>
                    <h1 >NUESTROS PAQUETES </h1>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Buscar Paquete" aria-label="Buscar Paquete" aria-describedby="basic-addon2" 
                    onChange={e => { setTextoBuscar(e.target.value) ; buscar()} }/>
                    <div class="input-group-append">
                        <button class="btn btn-primary" style={{"margin-left" : 20}} type="button" onClick={() => buscar()}>Buscar</button>
                    </div>
                </div>
                {dibujarTabla()}
            </div>
        </div>
    )
}
