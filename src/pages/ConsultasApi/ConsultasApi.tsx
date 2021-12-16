import styles from "./consultas.module.css";

export const ConsultasApi = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>api rest</h3>
      <div className={`${styles.card} `}>
        <div className={`${styles.rowCard}`}>
          <div className={`${styles.cardBody}`}>
            <p className="card-text">
              Para esta demostración creé un microservicio rest (tiene
              habilitado CORS), el cual provee los endpoints necesarios para
              este mini proyecto.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className={styles.h3}>Consultas</h3>
        <div className={`${styles.card} `}>
          <div className={`${styles.rowCard}`}>
            <div className={`${styles.cardBody}`}>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
