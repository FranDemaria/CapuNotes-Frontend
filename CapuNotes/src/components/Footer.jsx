// components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactoInfo from './ContactoInfo';
import './Footer.css'; // si tenés estilos específicos

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
            <ContactoInfo />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;