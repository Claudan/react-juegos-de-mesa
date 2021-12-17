import styles from "./juegos.module.css";

export const Filtro = () => {
  return (
    <div className={styles.filtro}>
      <p className={styles.tituloFiltro}>Clasificación de edad</p>
      <ul className={styles.opcionesFiltro}>
        <li>
          <a href="#">Desde 3 años</a>
        </li>
        <li>
          <a href="#">Desde 4 años</a>
        </li>
        <li>
          <a href="#">Desde 8 años</a>
        </li>
        <li>
          <a href="#">Desde 12 años</a>
        </li>
      </ul>
    </div>
  );
};
