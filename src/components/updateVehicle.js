import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  const [vehicle, setVehicle] = useState({});

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
  let { vehicleId } = useParams();

  console.log(vehicleId);
  const handleClick = (event) => {
    let data = {
      vehicleId: vehicleId,
      vehicleType: event.target.elements.vehicleType.value,
      vehicleModel: event.target.elements.vehicleModel.value,
      vehicleCreationDate: event.target.elements.vehicleCreationDate.value,
      vehiclePrice: event.target.elements.vehiclePrice.value,
    };
    updateVehicle(data);
  };
  const handleChange = (event) => {
    setVehicle({ ...event.target });
  };
  useEffect(() => {
    getVehicle(vehicleId);
  }, [vehicleId]);

  return (
    <div className="container">
      <br></br>
      <Form onSubmit={handleClick} onChange={handleChange}>
        <Form.Group controlId="vehicleType">
          <Form.Label>Vehicle Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="vehicleType"
            value={vehicle.vehicleType}
          />
        </Form.Group>

        <Form.Group controlId="vehicleModel">
          <Form.Label>Vehicle Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="vehicleModel"
            value={vehicle.vehicleModel}
          />
        </Form.Group>

        <Form.Group controlId="vehicleCreationDate">
          <Form.Label>Vehicle Creation Date</Form.Label>
          <Form.Control
            type="date"
            value={new Date(vehicle.vehicleCreationDate)}
          />
        </Form.Group>

        <Form.Group controlId="vehiclePrice">
          <Form.Label>Vehicle Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="vehiclePrice"
            value={vehicle.vehiclePrice}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
