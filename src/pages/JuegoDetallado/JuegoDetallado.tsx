import { Link, useLocation } from "react-router-dom";
import { useJuegoDetallado } from "../../hooks/useJuegoDetallado";
import queryString from "query-string";
import styles from "./JuegoDetallado.module.css";

export const JuegoDetallado = () => {
  const location = useLocation();
  const nombreJuego = queryString.parse(location.search).q?.toString() || "";

  const { juego, isLoading } = useJuegoDetallado(nombreJuego);

  return (
    <div className={styles.container}>
      <div className={styles.breadContainer}>
        <h3 className={styles.h3}>Juego Detallado</h3>
        <Link className={styles.breadcrumb} to="/juegos">
          Volver al inicio
        </Link>
      </div>
      <div className={`${styles.card} `}>
        {isLoading ? (
          <></>
        ) : (
          <>
            <div className={`row`}>
              <div className={`${styles.imgContainer} col-4`}>
                <img
                  className="card-img-top"
                  src={juego?.imagenes[0].ruta}
                  alt="nombre juego"
                />
              </div>
              <div className={`${styles.infoConatiner} col-8`}>
                <h5 className="card-title">{juego?.nombre}</h5>
                <p className="card-text">{juego?.descripcion}</p>
                <ul>
                  <li>Desarrollador: {juego?.desarrollador}</li>
                  <li>Edad mínima: {juego?.edad_minima} años</li>
                  <li>
                    Jugadores: {juego?.cantidad_jugadores_minima} {" - "}
                    {juego?.cantidad_jugadores_maxima}
                  </li>
                  <li>Duración aproximada: {juego?.duracion} minutos</li>
                </ul>
              </div>
            </div>
            <div className="card-body"></div>
          </>
        )}
      </div>
    </div>
  );
};
