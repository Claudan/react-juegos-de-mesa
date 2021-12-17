import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import styles from "./juegos.module.css";

interface Props {
  url: string;
}

export const PreviewJuego = ({ url }: Props) => {
  return (
    <div className={`${styles.cardPreview}`}>
      <div className={styles.imgContainer}>
        <img className="card-img-top" src={url} alt="Card image cap" />
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a className={`${styles.valorar} btn  btn-light`}>
          <FontAwesomeIcon icon={faInfo} className={styles.faInfo} /> Ver
          detalles
        </a>
      </div>
    </div>
  );
};
