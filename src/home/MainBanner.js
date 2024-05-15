
import React, { useEffect, useState } from 'react'
import './MainBanner.css'

export default function MainBanner() {
    const [listBanner, setListBanner] = useState([])

    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        //const rutaServicio = "http://joaquinep04.byethost24.com/banner.php";
        const rutaServicio = "https://joaquinmorenoep01.000webhostapp.com/paquetes.php";

        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {

                console.log(data)
                setListBanner(data);

            });
    }





    return (
        <div className='main d-flex '>

            <div className='sideIcons'>

                <div className="d-flex line justify-content-center" style={{ height: 200 }}>
                    <div className="vr"></div>
                </div>
                <div className='iconContainer'>
                    <i className="bi bi-facebook"></i>
                </div>
                <div className='iconContainer'>
                    <i className="bi bi-twitter"></i>
                </div>
                <div className='iconContainer'>
                    <i className="bi bi-linkedin"></i>
                </div>
                <div className='iconContainer'>
                    <i className="bi bi-vimeo"></i>
                </div>

            </div>


            <div id="carouselExampleControls" className="carousel slide banner" data-bs-ride="carousel">
                <div className="carousel-inner">


                    {listBanner.map(item =>
                        <div className="carousel-item active" key={item.id}>
                            <img src={"https://joaquinmorenoep01.000webhostapp.com/images/" + item.foto} className="d-block w-100 bannerImg" alt="..." />
                            
                            <div className="carousel-caption d-none d-md-block carouselText">
                                <h1>DESCUBRE {item.paisDestino == "Spain" ? "ESPAÑA" :   item.paisDestino.toUpperCase()}</h1>
                                <h4>Tenemos paquetes desde ${parseFloat(item.precio).toFixed(0)}</h4>
                                <p>precio valido para paquetes del {item.fecIda}*</p>
                                <div>
                                    COMPRA AHORA
                                </div>

                            </div>

                           
                        </div>)}




                </div>

                <div className='controlsBanner'>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

                </div>
            </div>


        </div>
    )
}
