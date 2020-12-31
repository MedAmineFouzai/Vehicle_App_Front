import Vehicles from "./components/vehicles";
import AddVehicles from "./components/addVehicle";
import UpdateVehicles from "./components/updateVehicle";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Vehicles App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Vehicles</Nav.Link>
            <Nav.Link href="/addVehicles">Add Vehicle</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <>
        <Switch>
          <Route path="/" component={Vehicles} exact />
          <Route path="/addVehicles" component={AddVehicles} exact />
          <Route
            path="/updateVehicle/:vehicleId"
            component={UpdateVehicles}
            exact
          />
        </Switch>
      </>
    </Router>
  );
}
