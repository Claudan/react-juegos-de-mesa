import styles from "./JuegoDetallado.module.css";
import gato1 from "../../assets/images/404/1.webp";
import gato2 from "../../assets/images/404/2.webp";
import gato3 from "../../assets/images/404/3.webp";
import gato4 from "../../assets/images/404/4.webp";
import gato5 from "../../assets/images/404/5.webp";
import gato6 from "../../assets/images/404/6.webp";

export const JuegoNoEncontrado = () => {
  const GATOS = [gato1, gato2, gato3, gato4, gato5, gato6];
  return (
    <div className={`row`}>
      <div className={`${styles.imgContainer} col-4`}>
        <img
          className="card-img-top"
          src={GATOS[Math.floor(Math.random() * GATOS.length)]}
          alt="nombre juego"
        />
      </div>
      <div className={`${styles.infoConatiner} col-8`}>
        <h5 className="card-title">404 - Juego no encontrado</h5>
        <p className="card-text">Se adjunta un gato por las molestias.</p>
      </div>
    </div>
  );
};
