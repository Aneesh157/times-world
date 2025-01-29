import { Col, Container, Nav, Row } from "react-bootstrap";

const Header = () => {
  return (
    <header className="bg-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-start">
            <h4 className="fw-bold">Countries</h4>
          </Col>

          <Col xs={12} md={6} className="text-end">
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="#" className="text-dark fw-bold text-decoration-underline"> All </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-dark"> Asia </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-dark"> Europe </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <hr className="border-dark" />
            <h1 className="fw-bold text-dark">WELCOME</h1>
            <hr className="border-dark" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
