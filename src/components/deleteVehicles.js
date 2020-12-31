import Button from "react-bootstrap/Button";

const deleteVehicle = async (id) => {
  try {
    await fetch(`http://localhost:8080/vehicles/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};

function DeleteButton(props) {
  const handleClick = () => {
    deleteVehicle(props.id);
  };

  return (
    <Button variant="danger" disabled={false} onClick={handleClick}>
      Delete
    </Button>
  );
}

export default DeleteButton;
