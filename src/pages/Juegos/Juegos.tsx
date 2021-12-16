import React from "react";
import { JuegoSeleccionado } from "./JuegoSeleccionado";
import { PreviewJuego } from "./PreviewJuego";
import styles from "./juegos.module.css";

export const Juegos = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Panel de juegos</h3>
      <div className="row">
        <div className="col-9">
          <JuegoSeleccionado />
        </div>
        <div className={`col-3 ${styles.h3}`}>filtros</div>
      </div>
      <h3 className={styles.h3}>otros juegos</h3>
      <div className={styles.PreviewContainer}>
        <PreviewJuego />
        <PreviewJuego />
        <PreviewJuego />
      </div>
    </div>
  );
};
