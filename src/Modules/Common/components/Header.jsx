import { Col, Container, Nav, Row } from "react-bootstrap";

const Header = ({setFilter, filter}) => {

  const handleFilter =(val)=>{
    setFilter(val)
  };

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
                <Nav.Link href="#" className={`text-dark fw-bold ${ filter === "All" ? "text-decoration-underline" : "" }`} onClick={()=>handleFilter("All")}> All </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className={`text-dark fw-bold ${ filter === "Asia" ? "text-decoration-underline" : "" }`} onClick={()=>handleFilter("Asia")}> Asia </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className={`text-dark fw-bold ${ filter === "Europe" ? "text-decoration-underline" : "" }`} onClick={()=>handleFilter("Europe")}> Europe </Nav.Link>
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
