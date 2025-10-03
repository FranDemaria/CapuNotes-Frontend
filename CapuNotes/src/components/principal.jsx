import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // ✅ nuevo componente modular
import Menu from './menu.jsx';
import './principal.css';

export default function Principal({ username }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();

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
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </button>

      <div className="home-container">
        <header className="welcome d-flex flex-row align-items-center justify-content-center text-center">
          <img
            src="/Logo coro sin fondo.jpg"
            alt="Logo del Coro Capuchinos"
            className="welcome-logo mb-2 me-3"
          />
          <div className="welcome-texts text-start">
            <h3>Bienvenido, {username}!</h3>
            <p>Tu música, tu comunidad.</p>
          </div>
        </header>

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

        <section className="tareas-section">
          <h4 className="text-white">Tareas principales</h4>
          <div className="tareas-grid">
            <div className="tarea-card">📋 Asistencia</div>
            <div className="tarea-card tarea-activa">📅 Eventos</div>
            <div className="tarea-card tarea-activa">🎶 Actividades complementarias</div>
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

      {/* ✅ Footer modularizado */}
      <Footer />
    </div>
  );
}