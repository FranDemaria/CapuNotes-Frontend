import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // ✅ Navbar modular
import Footer from '../components/Footer'; // ✅ Footer modular
import './landing.css';

const Landing = () => {
  console.log('🏠 Landing component rendering...');
  console.log('🏠 Landing component mounted');

  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/Iglesia1.jpg',
    '/Iglesia2.jpg',
    '/Iglesia3.jpg',
    '/Iglesia4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleLogin = () => {
    window.scrollTo(0, 0);
    navigate('/login');
  };

  const handleInscripciones = () => {
    window.scrollTo(0, 0);
    navigate('/inscripciones');
  };

  const handleQuienesSomos = () => {
    window.scrollTo(0, 0);
    navigate('/quienes-somos');
  };

  return (
    <div className="landing-page">
      {console.log('🏠 Landing JSX rendering...')}

      {/* ✅ Navbar modular */}
      <Navbar
      activePage="landing"
      onHome={() => navigate('/')}
      onInscripciones={handleInscripciones}
      onSesion={handleLogin}
      onQuienesSomos={handleQuienesSomos} // ✅ nueva prop
    />

      {/* Hero Section con carousel automático */}
      <section className="hero-section">
        <div className="image-carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img
                  src={image}
                  alt={`Iglesia ${index + 1}`}
                  className="carousel-image"
                />
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentImageIndex ? 'active' : ''
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={4} className="mb-4">
              <Card className="info-card card-blue" onClick={handleQuienesSomos}>
                <Card.Body className="text-center">
                  <div className="card-icon">🏛️</div>
                  <Card.Text className="card-text">
                    Conocé quienes somos
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="mb-4">
              <Card className="info-card card-orange" onClick={handleInscripciones}>
                <Card.Body className="text-center">
                  <div className="card-icon">👥</div>
                  <Card.Text className="card-text">
                    Formá parte de nuestro coro
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} className="mb-4">
              <Card className="info-card card-blue">
                <Card.Body className="text-center">
                  <div className="card-icon">🎵</div>
                  <Card.Text className="card-text">
                    Chequeá el repertorio de este domingo
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ✅ Footer modular */}
      <Footer />
    </div>
  );
};

export default Landing;