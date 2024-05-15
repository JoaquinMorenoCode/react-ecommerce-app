import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './PaqueteSeleccionado.css';

export default function PaqueteSeleccionado() {
  const [paquete, setPaquete] = useState([]);
  let params = useParams();

  // console.log(params);

  useEffect(() => {
    leerServicio();
  }, []);


  const leerServicio = (id) => {
    const rutaServicio = "https://my-json-server.typicode.com/joaquinm683/ep03_PW2/paquetes?id=" + params.id;

    fetch(rutaServicio)
      .then(response => response.json())
      .then(data => {

        console.log(data[0].precio)
        setPaquete(data[0]);

      });
  }

  const dibujarPaquete = () => {
    return (
      <div className=' mainPaqueteSeleccionado d-flex justify-content-around'>
      <div className="cardPaquete" >
        <div className='PaqueteImage'>
          <img src={"https://raw.githubusercontent.com/joaquinm683/ep03_PW2/main/images/" + paquete.paisDestino + ".jpg"} className="card-img-top" alt="..." />
        </div>
        <div className="PaqueteText">
          <h1 className='cardCategory'>CONOCE  {paquete.paisDestino == "Spain" ? "ESPAÑA" : paquete.paisDestino.toUpperCase()}</h1>
          <h4 className="cardDescription">{paquete.descripcion}
          </h4>
          <h6 className="cardDescription"> Desde US$ {parseFloat(paquete.precio).toFixed(2)}
          </h6>
        </div>
      </div>

      <div className="PaqueteCard" style={{width: '30rem'}}>
        <img className="PaqueteCardImg" src={"https://raw.githubusercontent.com/joaquinm683/ep03_PW2/main/images/" + paquete.foto} alt="Card image cap" />
       
        <div className="PaqueteCardText">
        <div className="card-body">
          <h5 className="card-title">{paquete.descripcion}</h5> <br></br>
          
          
        </div>
          <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Viaje de {paquete.tipo.toLowerCase()} hasta {paquete.Destino} por solo  ${paquete.precio}!!</li>
          <li className="list-group-item">{paquete.fecVuelta == "" ? "Viaja el " + paquete.fecIda : paquete.fecIda + " - " + paquete.fecVuelta}</li>
          <li className="list-group-item">{paquete.categoria}</li>
        </ul>
        </div>
    
      </div>
    </div>


    )}


  return (
   <>{paquete.id==null ? "" : dibujarPaquete()}</>
  )
}
