import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import styles from "./juegos.module.css";
import { Juego } from "../../interfaces/juegosInterface";

export const PreviewJuego = ({ juego }: { juego: Juego }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/juego-detallado?q=${juego.nombre}`);
  };

  return (
    <div className={`${styles.cardPreview}`}>
      <h5 className="card-title">{juego.nombre}</h5>
      <div className={styles.imgContainer}>
        <img
          className="card-img-top"
          src={juego.imagenes[0]}
          alt="Card image cap"
        />
      </div>
      <div className="card-body">
        <ul>
          <li>Desarrollador: {juego.desarrollador}</li>
          <li>Edad mínima: {juego.edad_minima} años</li>
          <li>
            Jugadores: {juego.cantidad_jugadores_minima} {" - "}
            {juego.cantidad_jugadores_maxima}
          </li>
          <li>Duración aproximada: {juego.duracion} minutos</li>
        </ul>
        <a
          className={`${styles.valorar} btn btn-light`}
          onClick={handleNavigate}>
          <FontAwesomeIcon icon={faInfo} className={styles.faInfo} /> Ver
          detalles
        </a>
      </div>
    </div>
  );
};
