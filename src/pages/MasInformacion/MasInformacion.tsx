import styles from "./masinformacion.module.css";

export const MasInformacion = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Más información</h3>
      <div className={`${styles.card} `}>
        <div className={`${styles.rowCard}`}>
          <div className={`${styles.cardBody}`}>
            <p className="card-text">
              El objetivo de este proyecto es funcionar como demostración que
              dejo como repositorio público en mi cuenta de github.
            </p>

            <p className="card-text">
              Desarrollé el sistema completo, tanto el frontend como el backend
              y realicé su posterior despliegue en instancias de mi cuenta
              personal de AWS.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.card} `}>
        <div className={`${styles.rowCard}`}>
          <div className={`${styles.cardBody}`}>
            <p className="card-text">
              Este panel frontend fue desarrollado utilizando{" "}
              <strong>React con Typescript</strong>
            </p>
            <a
              target="_blank"
              href="https://github.com/Claudan/react-juegos-de-mesa"
              rel="noreferrer">
              Link del repositorio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
