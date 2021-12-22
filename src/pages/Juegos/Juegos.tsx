import { PreviewJuego } from "./PreviewJuego";
import styles from "./juegos.module.css";
import { Filtro } from "./Filtro";
import { useJuegos } from "../../hooks/useJuegos";

export const Juegos = () => {
  const { juegos, isLoading } = useJuegos();

  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Panel de juegos de mesa</h3>
      <div className="row">
        <div className="col-9">
          <div className={`${styles.PreviewContainer} row`}>
            {isLoading ? (
              <>cargando...</>
            ) : (
              <>
                {juegos.map((juego, i) => (
                  <div className="col-6" key={`juego_${i}`}>
                    <PreviewJuego juego={juego} />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        <div className={`${styles.filtroContainer} col-3`}>
          <h3 className={styles.h3}>filtros</h3>
          <Filtro />
          <Filtro />
          <Filtro />
        </div>
      </div>
    </div>
  );
};
