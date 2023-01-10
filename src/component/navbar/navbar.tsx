import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function TopNavigation() {
  return (
      <Navbar bg="light" expand="lg" className="mb-3" sticky='top'>
        <Container fluid>
          <Navbar.Brand href="#">CAR CARING</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                CAR CARING
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link >
                  <Link to={"/trang-chu"}>
                    Trang chủ
                  </Link>
                </Nav.Link>
                <Nav.Link >Sản phẩm</Nav.Link>
                <NavDropdown
                  title="Dịch vụ"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item>
                    <Link to={"/dich-vu"} >
                      Dịch vụ 1
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                  Dịch vụ 2
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                  Dịch vụ 3
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Tìm</Button>
              </Form>
              <Button className='navbar-btn' style={{backgroundColor: "#33bcb7"}}>Đăng nhập</Button>
              <Button className='navbar-btn' style={{backgroundColor: "#8fcaeb"}}>Đăng kí</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  );
}

export default TopNavigation;
