import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./App.css";

function Mascota(props) {
  return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
      <Card.Img
        style={{ height: "14rem" }}
        variant="top"
        src={props.mascota.foto}
        alt={props.mascota.descripcion}
      />
      <Card.Body>
        <Card.Title>
          <Link 
            to={{
              pathname: "/mascotas/" + props.mascota.id,
            }}
            state={{ mascota: props.mascota }}
          >
            {props.mascota.nombre}
          </Link>
        </Card.Title>
        <Card.Text>{props.mascota.descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Mascota;
