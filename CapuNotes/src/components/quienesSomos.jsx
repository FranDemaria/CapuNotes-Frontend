import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import Navbar from '../components/Navbar'; // Navbar modular
import ContactoInfo from '../components/ContactoInfo'; // Footer modular
=======
>>>>>>> main
import './quienesSomos.css';

const QuienesSomos = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
=======
  const handleLogin = () => {
    window.scrollTo(0, 0);
    navigate('/login');
  };

>>>>>>> main
  const handleInscripciones = () => {
    window.scrollTo(0, 0);
    navigate('/inscripciones');
  };

  const handleContacto = () => {
<<<<<<< HEAD
    window.scrollTo(0, 0);
    navigate('/contacto');
=======
    console.log('Ir a contacto');
>>>>>>> main
  };

  const handleHome = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  return (
    <div className="quienes-somos-page">
<<<<<<< HEAD
      {/* Navbar reutilizable */}
      <Navbar
        activePage="quienes"
        onHome={handleHome}
        onInscripciones={handleInscripciones}
        onContacto={handleContacto}
      />
=======
      {/* Header */}
      <nav className="landing-navbar">
        <Container fluid>
          <Row className="w-100 align-items-center">
            <Col xs={6} md={3}>
              <div className="navbar-brand" onClick={handleHome}>
                <span className="brand-icon">❄️</span>
                <span className="brand-text">CapuNotes</span>
              </div>
            </Col>
            <Col xs={6} md={9}>
              <div className="navbar-menu">
                <span className="nav-link active">Quienes somos</span>
                <span className="nav-link" onClick={handleInscripciones}>
                  Inscripciones
                </span>
                <span className="nav-link" onClick={handleContacto}>
                  Contacto
                </span>
                <button className="close-btn" onClick={handleHome}>
                  ✕
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </nav>
>>>>>>> main

      {/* Hero Image */}
      <section className="hero-image-section">
        <div className="hero-image-container">
          <img
            src="/Iglesia1.jpg"
<<<<<<< HEAD
            alt="Fachada de la Iglesia de los Capuchinos en Córdoba"
=======
            alt="Iglesia Capuchinos"
>>>>>>> main
            className="hero-image"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={10} xl={8}>
              <div className="content-container">
<<<<<<< HEAD
                <h2 className="section-title">¿Quiénes somos?</h2>
=======
                <h2 className="section-title">Quienes somos</h2>
>>>>>>> main

                <div className="content-text">
                  <p>
                    El <strong>Coro Capuchinos</strong> es un grupo musical que
                    participa activamente en la liturgia de la Iglesia del
                    Sagrado Corazón de Jesús, conocida como Iglesia de los
                    Capuchinos, debido a la orden franciscana que la atiende.
                  </p>

                  <p>
                    Su labor se destaca especialmente en las{' '}
                    <strong>misas universitarias</strong> nocturnas de los
                    domingos, donde ofrece un variado repertorio con arreglos
                    corales que enriquecen la celebración de la fe.
                  </p>

                  <p>
                    El coro está integrado por{' '}
                    <strong>jóvenes y adultos</strong> que, de manera
                    voluntaria, ponen su voz y su tiempo al servicio de la
                    comunidad, manteniendo viva una tradición musical que se
                    caracteriza por la parroquia. Además de su participación en
                    las celebraciones litúrgicas, el grupo interviene en
                    ceremonias especiales, eventos culturales y actividades
                    solidarias, lo que lo convierte en una referente coral del
                    ámbito religioso y comunitario de la{' '}
                    <strong>ciudad de Córdoba</strong>.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

<<<<<<< HEAD
      {/* Footer con componente ContactoInfo */}
=======
      {/* Footer */}
>>>>>>> main
      <footer className="landing-footer">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="footer-brand">
                <span className="brand-icon">❄️</span>
                <span className="brand-text">CapuNotes</span>
              </div>
            </Col>
<<<<<<< HEAD
            <Col xs={12} md={6}>
              <ContactoInfo />
=======
            <Col xs={12} md={3}>
              <div className="footer-info">
                <p className="footer-title">Dirección:</p>
                <p>Buenos Aires 600</p>
                <p>Córdoba, Argentina</p>
              </div>
            </Col>
            <Col xs={12} md={3}>
              <div className="footer-info">
                <p className="footer-title">Teléfono:</p>
                <p>351000000</p>
              </div>
>>>>>>> main
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

<<<<<<< HEAD
export default QuienesSomos;
=======
export default QuienesSomos;
>>>>>>> main
