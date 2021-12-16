import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Juegos } from "../pages/Juegos/Juegos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

import reactLogo from "../logo.svg";
import tsLogo from "../typescript.png";
import styles from "./Navigation.module.css";
import { Sidebar } from "../components/shared/Sidebar";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={`${styles.mainLayout} main-layout`}>
        <nav className={styles.nav}>
          <div>
            <FontAwesomeIcon icon={faBars} className={styles.faBars} />
          </div>
          <form className={styles.formBusqueda}>
            <span className={styles.spanBusqueda} id="basic-addon1">
              <FontAwesomeIcon icon={faSearch} className={styles.faSearch} />
            </span>
            <input
              className={`form-control ${styles.inputBusqueda}`}
              type="search"
              aria-label="Search"
              autoComplete="off"
              placeholder="Búsqueda"
            />
          </form>
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
