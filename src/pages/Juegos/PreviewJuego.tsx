import React from "react";
import styles from "./juegos.module.css";

export const PreviewJuego = () => {
  return (
    <div className={`${styles.cardPreview}`}>
      <img
        className="card-img-top"
        src="https://http2.mlstatic.com/D_NQ_NP_940060-MLC48044122889_102021-O.webp"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};
