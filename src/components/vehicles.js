import { Table } from "react-bootstrap";
import VehicleList from "./vehicleList";

export default function Vehicles() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Vehicle Type</th>
          <th>vehicle Model</th>
          <th>vehicle CreationDate</th>
          <th>vehicle Price</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <VehicleList />
      </tbody>
    </Table>
  );
}
