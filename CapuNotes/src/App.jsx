import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landing';
import QuienesSomos from './components/quienesSomos';
import Formulario from './components/formulario';
import Login from './components/login';
import Principal from './components/principal';
import Menu from './components/menu';
import Miembros from './components/miembro';
import OrganizacionCoro from './components/organizacionCoro';
import Audiciones from './components/audiciones';
import MenuAudiciones from './components/menuAudiciones';
import Candidato from './components/candidato';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  console.log('App component rendering...');
  console.log('Current URL:', window.location.pathname);
  console.log('Is Authenticated:', isAuthenticated);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/inscripciones" element={<Formulario />} />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setUsername={setUsername}
              />
            ) : (
              <Navigate to="/principal" replace />
            )
          }
        />
        <Route
          path="/principal"
          element={
            isAuthenticated ? (
              <Principal username={username} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/menu"
          element={isAuthenticated ? <Menu /> : <Navigate to="/" replace />}
        />
        <Route
          path="/miembros"
          element={isAuthenticated ? <Miembros /> : <Navigate to="/" replace />}
        />
        <Route
          path="/organizacion-coro"
          element={
            isAuthenticated ? <OrganizacionCoro /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/menu-audiciones"
          element={
            isAuthenticated ? <MenuAudiciones /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/audiciones"
          element={
            isAuthenticated ? (
              <Audiciones username={username} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/candidato"
          element={isAuthenticated ? <Candidato /> : <Navigate to="/" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;