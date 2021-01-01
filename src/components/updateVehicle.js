import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const updateVehicle = async (data) => {
  try {
    await fetch(`http://localhost:8080/vehicles/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
};

export default function UpdateVehicles(props) {
  const [vehicle, setVehicle] = useState(null);

  const getVehicle = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/vehicles/${id}`, {
        method: "GET",
      });
      const data = await response.json();
      setVehicle(data);
    } catch (error) {
      console.error(error);
    }
  };
  const { vehicleId } = useParams();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (vehicle) {
      await updateVehicle(vehicle);
      history.push('/');
    }
  };
  const handleChange = (event) => {
    setVehicle({ ...vehicle, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    getVehicle(vehicleId);
  }, [vehicleId]);

  return vehicle && (
    <div className="container">
      <br></br>
      <Form onSubmit={handleSubmit} onChange={handleChange}>
        <Form.Group controlId="vehicleType">
          <Form.Label>Vehicle Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="vehicleType"
            value={vehicle.vehicleType}
            name='vehicleType'
          />
        </Form.Group>

        <Form.Group controlId="vehicleModel">
          <Form.Label>Vehicle Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="vehicleModel"
            value={vehicle.vehicleModel}
            name='vehicleModel'
          />
        </Form.Group>

        <Form.Group controlId="vehicleCreationDate">
          <Form.Label>Vehicle Creation Date</Form.Label>
          <Form.Control
            type="datetime-local"
            value={vehicle.vehicleCreationDate.split('.')[0]}
            name='vehicleCreationDate'
          />
        </Form.Group>

        <Form.Group controlId="vehiclePrice">
          <Form.Label>Vehicle Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="vehiclePrice"
            value={vehicle.vehiclePrice}
            name='vehiclePrice'
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
