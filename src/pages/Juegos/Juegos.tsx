import React from "react";
import { JuegoSeleccionado } from "./JuegoSeleccionado";
import { PreviewJuego } from "./PreviewJuego";
import styles from "./juegos.module.css";
import { Filtro } from "./Filtro";

export const Juegos = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Panel de juegos</h3>
      <div className="row">
        <div className="col-9">
          <JuegoSeleccionado />
          <h3 className={styles.h3}>otros juegos</h3>
          <div className={styles.PreviewContainer}>
            <PreviewJuego />
            <PreviewJuego />
            <PreviewJuego />
          </div>
        </div>
        <div className={`col-3`}>
          <h3 className={styles.h3}>filtros</h3>
          <Filtro />
          <Filtro />
          <Filtro />
        </div>
      </div>
    </div>
  );
};
