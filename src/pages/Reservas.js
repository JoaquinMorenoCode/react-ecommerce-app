import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './Reservas.css';

export default function Reservas() {

    const [listaReservas, setListaReservas] = useState([])
    const [ID, setID] = useState("");

    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [nroNoches, setNroNoches] = useState("");
    const [fecIngreso, setFecIngreso] = useState("");
    const [fecSalida, setFecSalida] = useState("");
    const [Observaciones, setObservaciones] = useState("");
    const [NroPersonas, setNroPersonas] = useState("");





    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const rutaServicio = "https://joaquinmorenoep01.000webhostapp.com/ep04Pw2/mostrar.php";

        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {


                setListaReservas(data);


            });
    }

    const dibujarTabla = () => {
        return (

            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Numero de Noches</th>
                        <th>Fecha Ingreso</th>
                        <th>Fecha Salida</th>
                        <th>Observaciones</th>
                        <th>Numero de Personas</th>
                        <th></th>


                        



                    </tr>
                </thead>
                <tbody>
                    {listaReservas.map(item =>
                        <tr key={item.id}   >
                            <td>{item.id}</td>
                            <td>{item.nombres}</td>
                            <td>{item.apellidos}</td>
                            <td>{item.nroNoches}</td>
                            <td>{item.fecIngreso}</td>
                            <td>{item.fecSalida}</td>
                            <td>{item.Observaciones}</td>
                            <td>{item.NroPersonas}</td>
                            <td data-bs-toggle="modal" data-bs-target="#updateModal" onClick={() => llenarDatos(item)}><i className="bi bi-gear-fill"></i></td>


                        </tr>




                    )}
                </tbody>

            </table>


        )
    }

    const insertarFila = (event) => {
        //Evita q el formulario se vuelva a cargar preventfedefault
        event.preventDefault();
        //quarrySelector selecciona el primero con la clase btnClose, SelectorAll selecciona TODOSSS
        //Aca indicamos que el querySelector solo seleccione  el btnclose dentro del id InsertModal!
        document.querySelector("#insertModal .btn-close").click();
        // console.log(nombre + "---" + descripcion)


        const rutaServicio = "https://joaquinmorenoep01.000webhostapp.com/ep04Pw2/insert.php";

        let formData = new FormData();

        // Seteamos los valores de los paramatros necesarios para el servicio 
        formData.append("nombres", nombres);
        formData.append("apellidos", apellidos);
        formData.append("nroNoches", nroNoches);
        formData.append("fecIngreso", fecIngreso);

        formData.append("fecSalida", fecSalida);

        formData.append("Observaciones", Observaciones);

        formData.append("NroPersonas", NroPersonas);



        //El responde.text pasa el obj del servio a texto creolol
        fetch(rutaServicio, {
            method: "POST",
            body: formData
        }).then(response =>

            response.text()
        ).then(result => {
            leerServicio();
            alert("Se ha agregado la reserva para " + nombres + " " + apellidos);
        })


    }

    const updateFila = (event) => {
        //Evita q el formulario se vuelva a cargar preventfedefault
        event.preventDefault();
        //quarrySelector selecciona el primero con la clase btnClose, SelectorAll selecciona TODOSSS
        //Aca indicamos que el querySelector solo seleccione  el btnclose dentro del id InsertModal!
        document.querySelector("#updateModal .btn-close").click();
        // console.log(nombre + "---" + descripcion)


        const rutaServicio = "https://joaquinmorenoep01.000webhostapp.com/ep04Pw2/update.php";

        let formData = new FormData();

        // Seteamos los valores de los paramatros necesarios para el servicio 
        formData.append("id", ID);

        formData.append("nombres", nombres);
        formData.append("apellidos", apellidos);
        formData.append("nroNoches", nroNoches);
        formData.append("fecIngreso", fecIngreso);

        formData.append("fecSalida", fecSalida);

        formData.append("Observaciones", Observaciones);

        formData.append("NroPersonas", NroPersonas);



        //El responde.text pasa el obj del servio a texto creolol
        fetch(rutaServicio, {
            method: "POST",
            body: formData
        }).then(response =>

            response.text()
        ).then(result => {
            leerServicio();
            alert("Se ha actualizado la reserva de " + nombres + ' ' + apellidos);
        })


    }


    const llenarDatos = (item) => {
        console.log(item);
        setID(item.id);
        setNombres(item.nombres);
        setApellidos(item.apellidos);
        setNroNoches(item.nroNoches);
        setFecIngreso(item.fecIngreso);
        setFecSalida(item.fecSalida);
        setObservaciones(item.Observaciones);

        setNroPersonas(item.NroPersonas);


    }

    const borrarCampos = () => {
        setID("");
        setNombres("");
        setApellidos("");
        setNroNoches("");
        setFecIngreso("");
        setFecSalida("");
        setObservaciones("");
        setNroPersonas("");
    }

    const showInsertModal = () => {
        return (
            <div className="modal fade" id="insertModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva Reserva</h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        {/* event nos permite acceder al objeto q hace la accion, en este caso al form */}
                        <form onSubmit={(event) => insertarFila(event)}>

                            <div className="modal-body">
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Nombres' value={nombres} required minLength="1" onChange={(event) => setNombres(event.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Apellidos' value={apellidos} required minLength="1" onChange={(event) => setApellidos(event.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Numero de Noches' value={nroNoches} required minLength="1" onChange={(event) => setNroNoches(event.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Fecha de Ingreso' value={fecIngreso} required minLength="1" onChange={(event) => setFecIngreso(event.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Fecha de Salida' value={fecSalida} required minLength="1" onChange={(event) => setFecSalida(event.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Observaciones' value={Observaciones} required minLength="1" onChange={(event) => setObservaciones(event.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='NroPersonas' value={NroPersonas} required minLength="1" onChange={(event) => setNroPersonas(event.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary" >Guardar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }



    const showUpdateModal = () => {
        return (
            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Reserva</h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        {/* event nos permite acceder al objeto q hace la accion, en este caso al form */}
                        <form onSubmit={(event) => updateFila(event)}>

                            <div className="modal-body">
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Nombres' value={nombres} required minLength="1" onChange={(event) => setNombres(event.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Apellidos' value={apellidos} required minLength="1" onChange={(event) => setApellidos(event.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Numero de Noches' value={nroNoches} required minLength="1" onChange={(event) => setNroNoches(event.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Fecha de Ingreso' value={fecIngreso} required minLength="1" onChange={(event) => setFecIngreso(event.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Fecha de Salida' value={fecSalida} required minLength="1" onChange={(event) => setFecSalida(event.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='Observaciones' value={Observaciones} required minLength="1" onChange={(event) => setObservaciones(event.target.value)} />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" className='form-control' placeholder='NroPersonas' value={NroPersonas} required minLength="1" onChange={(event) => setNroPersonas(event.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary" >Guardar</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='mainReserva'>
                <div className='container'>
                    <h1 className='reservaTitle'>    Administrar Reservas</h1>
                    <div className='mb-3'>
                        <button className='btn btn-primary' onClick={() => borrarCampos()}

                            data-bs-toggle="modal" data-bs-target="#insertModal"> Agregar Reserva</button>


                    </div>
                    <div>{dibujarTabla()}</div>


                </div>
            </div>
            {showInsertModal()}
            {showUpdateModal()}

        </>
    )
}
