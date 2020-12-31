import { useState, useEffect } from "react";
import DeleteButton from "./deleteVehicles";
import Button from "react-bootstrap/Button";
export default function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const getVehicles = async () => {
    try {
      const response = await fetch("http://localhost:8080/vehicles", {
        method: "GET",
      });
      const data = await response.json();
      setVehicles(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getVehicles();
  }, [vehicles]);

  const vehiclesItems = vehicles.map((vehicle) => {
    return (
      <tr key={vehicle.vehicleId}>
        <td>{vehicle.vehicleId}</td>
        <td>{vehicle.vehicleType}</td>
        <td>{vehicle.vehicleModel}</td>
        <td>{vehicle.vehicleCreationDate}</td>
        <td>{vehicle.vehiclePrice}</td>
        <td>
          <DeleteButton id={vehicle.vehicleId} />
        </td>
        <td>
          <Button
            href={`/updateVehicle/${vehicle.vehicleId}`}
            variant="primary"
          >
            Update
          </Button>
        </td>
      </tr>
    );
  });

  return vehiclesItems;
}
