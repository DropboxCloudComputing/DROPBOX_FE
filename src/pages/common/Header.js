import React from "react";
import { Navbar,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Header.css'
import Logo from "../../logo.svg"

const Header = () => {
  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src= {Logo}  //put our logo image here
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            DROPBOX
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;