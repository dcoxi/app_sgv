import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NovoEstado from "./components/estado/estado";


function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
      <Navbar bg="dark" variant="dark">
         <Container>
         <Nav className="justify-content-end">
                <Link to={"/"} className="nav-link">
                  Novo Estado
                </Link>
              </Nav>
         </Container>
      </Navbar>
      </header>
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route path="/" component={NovoEstado} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  );
}

export default App;
