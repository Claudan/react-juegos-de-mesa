import { Link } from "react-router-dom";
import styles from "./agregajuego.module.css";
export const AgregaJuego = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Agregar juego</h3>
      <div className={`${styles.card} `}>
        <div className={`${styles.rowCard}`}>
          <div className={`${styles.cardBody} ${styles.flex}`}>
            <p className="card-text">Para realizar esta acción necesita</p>
            <Link to="/sesion">iniciar sesión</Link>
          </div>
        </div>
      </div>
      <div className={`${styles.card} `}>
        <div className={`${styles.rowCard}`}>
          <div className={`${styles.cardBody}`}>
            <form>
              <div className="form-group">
                <label>Nombre del juego</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label>Edad mínima en años</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label>Cantidad de jugadores mínima</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label>Cantidad de jugadores máxima</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled>
                Para confirmar debe iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
