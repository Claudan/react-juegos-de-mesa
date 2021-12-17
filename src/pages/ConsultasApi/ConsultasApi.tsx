import styles from "./consultas.module.css";

const EJEMPLO = {
  id: 12,
  nombre: "Gatos explosivos",
  edad_minima: 2,
  duracion: 15,
  img: "https://http2.mlstatic.com/D_NQ_NP_992610-MLA46521613429_062021-O.webp",
};

export const ConsultasApi = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>api rest</h3>
      <div className={`${styles.card} `}>
        <div className={`${styles.rowCard}`}>
          <div className={`${styles.cardBody}`}>
            <p className="card-text">
              Para esta demostración desarrollé un microservicio rest (tiene
              habilitado CORS), el cual provee los endpoints necesarios para
              este mini proyecto.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className={styles.h3}>Consultas por nombre del juego</h3>
        <div className={`${styles.card} `}>
          <div className={`${styles.rowCard}`}>
            <div className={`${styles.cardBody}`}>
              <input type="text" className={styles.buscador} />
              <div className={styles.codigo}>
                <pre>
                  {JSON.stringify(EJEMPLO, null, 4).replace(/["[,\\]]/g, "")}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
