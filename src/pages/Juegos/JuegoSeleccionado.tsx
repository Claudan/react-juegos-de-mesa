import React from "react";
import styles from "./juegos.module.css";

export const JuegoSeleccionado = () => {
  return (
    <div className={`${styles.card} `}>
      <div className={`${styles.rowCard} row`}>
        <div className={`${styles.imgContainer} col-4`}>
          <img
            src="https://m.media-amazon.com/images/I/6128ETkeEnL._AC_SL1500_.jpg"
            alt="Card image cap"
          />
        </div>
        <div className={`${styles.cardBody} col-8`}>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};
