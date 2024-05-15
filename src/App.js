import logo from './logo.svg';
import './App.css';
import MainNav from './common/MainNav';
import MainBanner from './home/MainBanner';
import About from './home/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Paquetes from './pages/Paquetes';
import Footer from './common/Footer';
import PaqueteSeleccionado from './pages/PaqueteSeleccionado';
import Carrito from './pages/Carrito';
import Buscar from './pages/Buscar';
import Reservas from './pages/Reservas';

function App() {
  return (

    <>
      <BrowserRouter>
        <MainNav />
        <main id='main-content'>
          <Routes>

            <Route path="/" element={<Main></Main>} />
            <Route path="/paquetes" element={<Paquetes/>}></Route>
            <Route path="/paqueteSeleccionado/:id" element={<PaqueteSeleccionado/>}></Route>
            <Route path='/carrito' element={<Carrito/>}> </Route>
              <Route path='/buscar' element={<Buscar/>}> </Route>  
    
              <Route path='/reservas' element={<Reservas></Reservas>}></Route>   
          </Routes>

      

        </main>
        <Footer></Footer>


      </BrowserRouter>

    </>


  );
}

export default App;
