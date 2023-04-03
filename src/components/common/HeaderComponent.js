import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import Logo from "../../logo.svg";
import "../../styles/Header.css";

const HeaderComponent = () =>{
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    DROPBOX
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/login">로그인</Nav.Link>
                    <Nav.Link eventKey={2} href="/signup">
                        회원가입
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default HeaderComponent;