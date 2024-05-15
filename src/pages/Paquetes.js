import React, { useEffect, useState } from 'react'
import './Paquetes.css'
import PaquetesDetalle from './PaquetesDetalle';
import {CSSTransition} from 'react-transition-group'
export default function Paquetes() {

    const [listaDestino, setListaDestino] = useState([])
    const [DestinoSeleccionado, setDestinoSeleccionado] = useState([])
    useEffect(() => {
        leerServicio();

    }, [])

    const leerServicio = () => {
        const rutaServicio = "https://joaquinmorenoep01.000webhostapp.com/paquetes.php";
        
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {

                //console.log(data)
                setListaDestino(data);

            });
    }

    const seleccionarDestino = (item) => {
        
     
        console.log(item.paisDestino);
        setDestinoSeleccionado(item);
       
    }



       


    const dibujarCards = () => {
        return (
            
                <div className='mainDestinos'>
                    <div className="d-flex flex-wrap justify-content-center " >
                        {listaDestino.map(item =>
                            <div className="col" key={item.id} onClick={(event) => seleccionarDestino(item)}>
                                <div className="cardContainer" >
                                    <div className='cardImage'>
                                        <img src={"https://joaquinmorenoep01.000webhostapp.com/images/" + item.foto} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="cardText">
                                        <h3 className='cardCategory'>CONOCE  {item.paisDestino== "Spain" ? "ESPAÑA" : item.paisDestino.toUpperCase()}</h3>
                                        <h6 className="cardDescription">{item.descripcion.toUpperCase()}
                                        </h6>
                                        <h6 className="cardDescription"> Desde US$ {parseFloat(item.precio).toFixed(2)}
                                        </h6>
                                    </div>
                                </div>
                            </div>)}

                    </div>
                </div>


           
        )
    }


 

        return (
            <div className='mainPaquetes d-flex justify-content-center'>
                <div> {dibujarCards()}
                
                </div>
                
                <div className={'paqueteDetalle' + DestinoSeleccionado.paisDestino== null? "" : ":active"} >
                 
                    <PaquetesDetalle paquetes = {DestinoSeleccionado.paisDestino} ></PaquetesDetalle>
                </div>
                
            </div>
        )
    }
