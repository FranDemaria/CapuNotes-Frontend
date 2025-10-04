import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Navbar.css'; // si tenés estilos específicos
import { useNavigate } from 'react-router-dom';

const Navbar = ({ activePage, onHome, onInscripciones, onSesion, onQuienesSomos, showBack }) => {
  const navigate = useNavigate();

  return (
    <nav className="landing-navbar" role="navigation" aria-label="Menú principal">
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Col xs={6} md={3}>
            <div className="navbar-brand" onClick={onHome}>
              <span className="brand-icon">❄️</span>
              <span className="brand-text">CapuNotes</span>
            </div>
          </Col>
          <Col xs={6} md={9}>
            <div className="navbar-menu">
              <span className={`nav-link ${activePage === 'quienes' ? 'active' : ''}`} onClick={onQuienesSomos}>
                ¿Quiénes somos?
              </span>
              <span className="nav-link" onClick={onInscripciones}>
                Inscripciones
              </span>
              <span className="nav-link" onClick={onSesion}>
                Iniciar sesión
              </span>

              {/* ✅ Flecha al final */}
              {showBack && (
                <button className="back-btn" onClick={() => navigate(-1)} aria-label="Volver">
                  ←
                </button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar