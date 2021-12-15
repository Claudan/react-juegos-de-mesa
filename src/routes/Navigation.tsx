import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { index as Juegos } from "../pages/Juegos/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";

import reactLogo from "../logo.svg";
import tsLogo from "../typescript.png";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav className={styles.nav}>
          <div>
            <FontAwesomeIcon icon={faBars} className={styles.faBars} />
          </div>

          <div className={styles.logo}>
            <img src={tsLogo} alt="Typescript" className={styles.tsLogo} />
            <FontAwesomeIcon icon={faPlus} className={styles.faPlus} />
            <img src={reactLogo} alt="React" className={styles.reactLogo} />
          </div>
        </nav>
        <Routes>
          <Route
            path="agrega-juego"
            element={<h1>página para agregar juegos</h1>}
          />
          <Route path="busqueda" element={<h1>Página de búsqueda</h1>} />
          <Route path="juegos" element={<Juegos />} />

          <Route path="/*" element={<Navigate to="/juegos" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
