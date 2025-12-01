import Inicio from './components/Inicio'
import {Routes, Route, Link} from 'react-router-dom'
import Ofertas from './components/Ofertas'
import Detalle from './components/Detalle'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Admin from './components/Admin'
import RutaProtegida from './components/RutaProtegida'
import Carrito from './components/Carrito'


function App() {
 

  return (
    <div className='container'>
      <Header/>
      <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/ofertas" element={<Ofertas/>}/>
          <Route path="/detalle/:id" element={<Detalle/>} />
          <Route path="/carrito" element={
              <RutaProtegida> 
                <Carrito/>
              </RutaProtegida>            
            }/>
          <Route path="/login" element={<Login/>}/>
          
          <Route path="/admin" element={
            <RutaProtegida>
              <Admin/>
            </RutaProtegida>
            }/>          
      </Routes>
      <Footer className="footer"/>               
      
    </div>
  )
}

export default App
