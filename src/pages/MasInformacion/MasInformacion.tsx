import styles from "./masinformacion.module.css";

export const MasInformacion = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Más información</h3>
      <div className={`${styles.card} `}>
        <div className={`${styles.rowCard}`}>
          <div className={`${styles.cardBody}`}>
            <p className="card-text">
              Este mini proyecto consiste en una aplicación web que hace fetch a
              un microservicio con juegos de mesa que desarrollé con objetivos
              de demostración.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
