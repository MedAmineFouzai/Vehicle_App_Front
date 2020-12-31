import { Form, Button } from "react-bootstrap";

const addVehicle = async (data) => {
  try {
    await fetch(`http://localhost:8080/vehicles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
};

export default function AddVehicles() {
  const handleClick = (event) => {
    let data = {
      vehicleType: event.target.elements.vehicleType.value,
      vehicleModel: event.target.elements.vehicleModel.value,
      vehicleCreationDate: event.target.elements.vehicleCreationDate.value,
      vehiclePrice: event.target.elements.vehiclePrice.value,
    };
    addVehicle(data);
  };

  return (
    <div className="container">
      <br></br>
      <Form onSubmit={handleClick}>
        <Form.Group controlId="vehicleType">
          <Form.Label>Vehicle Type</Form.Label>
          <Form.Control type="text" placeholder="vehicleType" />
        </Form.Group>

        <Form.Group controlId="vehicleModel">
          <Form.Label>Vehicle Model</Form.Label>
          <Form.Control type="text" placeholder="vehicleModel" />
        </Form.Group>

        <Form.Group controlId="vehicleCreationDate">
          <Form.Label>Vehicle Creation Date</Form.Label>
          <Form.Control type="date" placeholder="vehicleType" />
        </Form.Group>

        <Form.Group controlId="vehiclePrice">
          <Form.Label>Vehicle Price</Form.Label>
          <Form.Control type="number" placeholder="vehiclePrice" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
