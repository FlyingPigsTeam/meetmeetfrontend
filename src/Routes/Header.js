import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.css";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className={style.qqq}>
      <Navbar
        expand="lg"
        style={{
          height: "10vh",
          position: "fixed",
          width: "100vw",
          backgroundColor: "#5B8FB9",
          color: "#03001C",
        }}
        className={style.navbar}
      >
        <Container fluid>
          <Navbar.Brand
            style={{
              fontSize: "3em",
              marginBottom: "1vh",
              color: "#03001C",
              marginLeft: "2.5vw",
              cursor:"pointer"
            }}
            onClick={()=>navigate("/homepage")}
            className={style.titles}
          >
            Meet Meet
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", fontSize: "1.5em" }}
              navbarScroll
            ></Nav>
            <Nav
              style={{ marginRight: "5vh", fontSize: "1.5em" }}
              className={style.titles}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "1.5em", marginRight: "0.3vw" }}
              >
                account_circle
              </span>
              UserName
            </Nav>
            <Nav
              style={{ marginRight: "5vh", fontSize: "1.5em" }}
              // className={style.titles}
              className={style.navActive} onClick={() => navigate("/login")}
            >
              Login
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
