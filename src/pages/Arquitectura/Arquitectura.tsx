import styles from "./Arquitectura.module.css";
import arquitectura from "../../assets/images/arquitectura.webp";

export const Arquitectura = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Arquitectura de este sistema</h3>
      <div className={`${styles.card} `}>
        <div className={`${styles.rowCard}`}>
          <p className="card-text">
            En esta sección se muestra la arquitectura general, a nivel de red,
            de este sistema.
          </p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.fitContent}`}>
        <div className={`${styles.rowCard}`}>
          <img src={arquitectura} alt="arquitectura" />
        </div>
      </div>
      <div className={`${styles.card} `}>
        <div className={`${styles.rowCard}`}>
          <p className="card-text">
            El sistema consiste en un frontend (aplicación web) que hace fetch a
            un backend mediante el protocolo https. Todo el proyecto utiliza
            servicios de AWS, tales como instancias de máquinas virtuales y un
            servidor de almacenamiento Storage S3.
          </p>
        </div>
      </div>
    </div>
  );
};
