import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeUsuario from './pages/HomeUsuario';
import HomeMotorista from './pages/HomeMotorista';
import HomeAjudante from './pages/HomeAjudante';
import AddUsuario from './usuarios/AddUsuario.jsx';
import AddMotorista from './motoristas/AddMotorista.jsx';
import AddAjudante from './ajudantes/AddAjudante.jsx';
import EditUsuario from './usuarios/EditUsuario.jsx';
import EditMotorista from './motoristas/EditMotorista.jsx';
import EditAjudante from './ajudantes/EditAjudante.jsx';
import ViewUsuario from './usuarios/ViewUsuario';
import ViewMotorista from './motoristas/ViewMotorista';
import ViewAjudante from './ajudantes/ViewAjudante';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/homeusuario' element={<HomeUsuario />} />
        <Route exact path='/homemotorista' element={<HomeMotorista />} />
        <Route exact path='/homeajudante' element={<HomeAjudante />} />
        <Route exact path='/addusuario' element={<AddUsuario />} />
        <Route exact path='/addmotorista' element={<AddMotorista />} />
        <Route exact path='/addajudante' element={<AddAjudante />} />
        <Route exact path='/editusuario/:id_cliente' element={<EditUsuario />} />
        <Route exact path='/editmotorista/:id_motorista' element={<EditMotorista />} />
        <Route exact path='/editajudante/:id_ajudante' element={<EditAjudante />} />
        <Route exact path='/viewusuario/:id_cliente' element={<ViewUsuario />} />
        <Route exact path='/viewmotorista/:id_motorista' element={<ViewMotorista />} />
        <Route exact path='/viewajudante/:id_ajudante' element={<ViewAjudante />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
