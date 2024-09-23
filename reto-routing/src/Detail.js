import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Detail() {
  const location = useLocation();
  const mascota = location.state?.mascota;

  if (!mascota) {
    return <p>Cargando información...</p>;
  }

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "18rem", height: "auto" }} className="text-center">
        <Card.Img
          style={{ height: "14rem" }}
          variant="top"
          src={mascota.foto}
          alt={mascota.descripcion}
        />
        <Card.Body>
          <Card.Title>{mascota.nombre}</Card.Title>
          <Card.Text>{mascota.descripcion}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
