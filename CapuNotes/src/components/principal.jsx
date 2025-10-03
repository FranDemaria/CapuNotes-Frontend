import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // ✅ nuevo componente modular
import Menu from './menu.jsx';
import './principal.css';
=======
import './principal.css';
import Menu from './menu.jsx';
>>>>>>> main

export default function Principal({ username }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();

<<<<<<< HEAD
  const handleHome = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  const handleInscripciones = () => {
    window.scrollTo(0, 0);
    navigate('/inscripciones');
  };

  const handleContacto = () => {
    window.scrollTo(0, 0);
    navigate('/contacto');
  };

  if (menuAbierto) {
    return <Menu onClose={() => setMenuAbierto(false)} />;
  }

  return (
    <div className="principal-container">
      <Navbar
        activePage="principal"
        onHome={handleHome}
        onInscripciones={handleInscripciones}
        onContacto={handleContacto}
      />

      <button className="menu-btn" onClick={() => setMenuAbierto(true)}>
=======
  // Si el menú está abierto, solo mostrar el menú
  if (menuAbierto) {
    return <Menu onClose={() => setMenuAbierto(false)} />;
  }
  return (
    <div className="principal-container">
      {/* Botón menú hamburguesa siempre visible */}
      <button className="menu-btn" onClick={() => setMenuAbierto(!menuAbierto)}>
>>>>>>> main
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </button>

<<<<<<< HEAD
      <div className="home-container">
        <header className="welcome d-flex flex-row align-items-center justify-content-center text-center">
          <img
            src="/Logo coro sin fondo.jpg"
            alt="Logo del Coro Capuchinos"
=======
      {/* Mostrar el menú si está abierto */}
      {menuAbierto && <Menu onClose={() => setMenuAbierto(false)} />}

      {/* Contenido principal */}
      <div className="home-container">
        {/* Bienvenida */}
        <header className="welcome d-flex flex-row align-items-center justify-content-center text-center">
          <img
            src="/Logo coro sin fondo.jpg"
            alt="Logo Coro"
>>>>>>> main
            className="welcome-logo mb-2 me-3"
          />
          <div className="welcome-texts text-start">
            <h3>Bienvenido, {username}!</h3>
            <p>Tu música, tu comunidad.</p>
          </div>
        </header>

<<<<<<< HEAD
        <hr className="divisor-amarillo" />

        <section className="eventos-section">
          <h4 className="text-white">Tus próximos eventos:</h4>
          <div className="eventos-scroll">
            {[
              { titulo: 'Peña', fecha: 'Viernes 12/09 – 13hs', lugar: 'Villa Allende' },
              { titulo: 'Concierto', fecha: 'Sábado 14/09 – 18hs', lugar: 'Córdoba' },
              { titulo: 'Ensayo', fecha: 'Domingo 15/09 – 10hs', lugar: 'Sede Central' },
            ].map((evento, index) => (
              <div className="evento-card" key={index}>
                <h5>{evento.titulo}</h5>
                <p>📅 {evento.fecha}</p>
                <p>📍 {evento.lugar}</p>
              </div>
            ))}
          </div>
        </section>

=======
        {/* Línea divisora amarilla */}
        <hr className="divisor-amarillo" />

        {/* Próximos eventos */}
        <section className="eventos-section">
          <h4 className="text-white">Tus próximos eventos:</h4>
          <div className="eventos-scroll">
            <div className="evento-card">
              <h5>Peña</h5>
              <p>📅 Viernes 12/09 – 13hs</p>
              <p>📍 Villa Allende</p>
            </div>
            <div className="evento-card">
              <h5>Concierto</h5>
              <p>📅 Sábado 14/09 – 18hs</p>
              <p>📍 Córdoba</p>
            </div>
            <div className="evento-card">
              <h5>Ensayo</h5>
              <p>📅 Domingo 15/09 – 10hs</p>
              <p>📍 Sede Central</p>
            </div>
          </div>
        </section>

        {/* Tareas principales */}
>>>>>>> main
        <section className="tareas-section">
          <h4 className="text-white">Tareas principales</h4>
          <div className="tareas-grid">
            <div className="tarea-card">📋 Asistencia</div>
            <div className="tarea-card tarea-activa">📅 Eventos</div>
<<<<<<< HEAD
            <div className="tarea-card tarea-activa">🎶 Actividades complementarias</div>
=======
            <div className="tarea-card tarea-activa">
              🎶 Actividades complementarias
            </div>
>>>>>>> main
            <div
              className="tarea-card"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/menu-audiciones')}
            >
              🎤 Audiciones
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD

      {/* ✅ Footer modularizado */}
      <Footer />
    </div>
  );
}
=======
    </div>
  );
}
>>>>>>> main
