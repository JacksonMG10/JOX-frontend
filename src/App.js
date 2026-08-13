import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Registro from './components/Registro';
import MisVehiculos from './components/MisVehiculos';
import './App.css';
import RegistroVehiculos from './components/RegistroVehiculos';
import ExplorarVehiculo from './components/ExplorarVehiculo'; 
import ForoSocial from './components/ForoSocial';
import Introduccion from './components/Principal'
import Emergencias from './components/Emergencias';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Introduccion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/mis-vehiculos" element={<MisVehiculos />} />
            <Route path="/registrar-vehiculo" element={<RegistroVehiculos />} />
            <Route path="/explorar-vehiculo/:id" element={<ExplorarVehiculo />} />
            <Route path="/comunidad" element={<ForoSocial />} />
            <Route path="/emergencias" element={<Emergencias />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;