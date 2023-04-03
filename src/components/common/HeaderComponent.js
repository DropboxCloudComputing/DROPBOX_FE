import React,{Fragment} from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import Logo from "../../logo.svg";
import "../../styles/Header.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {loggedInState} from "../../recoil/atom"

const DefaultButton = () => {
    return(
        <Fragment>
            <Nav.Link href="/login">로그인</Nav.Link>
            <Nav.Link eventKey={2} href="/signup">회원가입</Nav.Link>
        </Fragment>
    );
};

const Logout = () => { 
    let setLoggedInState = useSetRecoilState(loggedInState);
    const ChangeLoggedInState = () => {
        setLoggedInState(() => false);
    };

    return(
        <Fragment>
            <Nav.Link href="/" onClick={ChangeLoggedInState}>
                로그아웃
            </Nav.Link>
        </Fragment>
    )
};

const HeaderComponent = () =>{
    const loggedIn = useRecoilValue(loggedInState);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="Logo"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    DROPBOX
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="loginbar"/>
                <Navbar.Collapse id="loginbar">
                    <Nav className="ms-auto">
                        {loggedIn ? <Logout /> : null}
                        {!loggedIn ? <DefaultButton /> : null}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderComponent;