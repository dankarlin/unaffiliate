import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <div className="App">
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="brand-logo">UNAFFILIATE</div>
              <h1 className="hero-title">Break Free from Brand Bondage</h1>
              <p className="hero-subtitle">
                Reclaim your identity. Distance yourself from the psychological grip of commercial brands. 
                Choose authentic self-expression over corporate-sponsored identity.
              </p>
              <Button variant="dark" size="lg" className="cta-button me-3">
                Start Unaffiliating
              </Button>
              <Button variant="outline-dark" size="lg" className="cta-button">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2>Why Unaffiliate?</h2>
              <p className="lead">Three pillars of psychological liberation from commercial influence</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <div className="feature-card">
                <i className="bi bi-person-check feature-icon"></i>
                <h4>Authentic Identity</h4>
                <p>Define yourself by your values, experiences, and choices—not by the brands you consume or display.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-card">
                <i className="bi bi-shield-check feature-icon"></i>
                <h4>Mental Independence</h4>
                <p>Resist the psychological manipulation of marketing designed to make you feel incomplete without products.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="feature-card">
                <i className="bi bi-arrow-up-circle feature-icon"></i>
                <h4>Conscious Choice</h4>
                <p>Make purchasing decisions based on utility and value, not brand prestige or social signaling.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="manifesto-section section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="text-center mb-5">The Unaffiliate Manifesto</h2>
              <div className="manifesto-text">
                <p>
                  We reject the notion that our worth is measured by the logos we wear, 
                  the devices we carry, or the brands we pledge allegiance to. We recognize 
                  that corporate marketing has evolved into sophisticated psychological 
                  manipulation, designed to make us feel inadequate without their products.
                </p>
                <p>
                  We choose to unaffiliate—to step back from the brand-identity trap that 
                  turns us into walking advertisements for corporations that profit from our 
                  insecurities. We reclaim our right to define ourselves on our own terms.
                </p>
                <p>
                  This isn't anti-consumption or anti-business. It's pro-human. It's about 
                  making conscious choices based on genuine need and personal values, not 
                  manufactured desire and social pressure.
                </p>
                <p className="fw-bold">
                  You are not what you buy. You are not your brand affiliations. You are yourself.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer">
        <Container>
          <Row>
            <Col md={6}>
              <h5>UNAFFILIATE</h5>
              <p>Psychological distance from commercial brands</p>
            </Col>
            <Col md={6} className="text-end">
              <p>
                <a href="https://unaffilate.us">unaffilate.us</a> | <a href="https://unaffiliate.org">unaffiliate.org</a>
              </p>
              <p className="small">Break free. Be yourself.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default App