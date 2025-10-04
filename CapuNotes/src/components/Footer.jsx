// components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // estilos específicos

const Footer = () => {
  return (
    <footer className="landing-footer">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="footer-brand">
              <span className="brand-icon">❄️</span>
              <span className="brand-text">CapuNotes</span>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="footer-info">
              <p className="footer-title">Dirección</p>
              <p>Buenos Aires 600</p>
              <p>Córdoba, Argentina</p>

              <p className="footer-title">Teléfono</p>
              <p>351000000</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;