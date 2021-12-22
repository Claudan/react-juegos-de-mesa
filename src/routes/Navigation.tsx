import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Juegos } from "../pages/Juegos/Juegos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

import reactLogo from "../logo.svg";
import tsLogo from "../typescript.png";
import styles from "./Navigation.module.css";
import { Sidebar } from "../components/shared/Sidebar";
import { ConsultasApi } from "../pages/ConsultasApi/ConsultasApi";
import { MasInformacion } from "../pages/MasInformacion/MasInformacion";
import { AgregaJuego } from "../pages/AgregarJuego/AgregaJuego";
import { JuegoDetallado } from "../pages/JuegoDetallado/JuegoDetallado";

export const Navigation = () => {
  const [state, setState] = useState({
    isBusquedaFocused: false,
  });
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
            <div className={styles.autocomplete}>
              <input
                className={`form-control ${styles.inputBusqueda}`}
                type="search"
                aria-label="Search"
                autoComplete="off"
                placeholder="Búsqueda"
                onFocus={(e) => setState({ ...state, isBusquedaFocused: true })}
                onBlur={(e) => setState({ ...state, isBusquedaFocused: false })}
              />
              <div
                className={styles.autocompleteItems}
                style={{ display: state.isBusquedaFocused ? "unset" : "none" }}>
                <div className={styles.autocompleteItem}>
                  <strong>Chile</strong>
                  <input type="hidden" value="Chile" />
                </div>
              </div>
            </div>
          </form>
          <div className={styles.logo}>
            <img src={tsLogo} alt="Typescript" className={styles.tsLogo} />
            <FontAwesomeIcon icon={faPlus} className={styles.faPlus} />
            <img src={reactLogo} alt="React" className={styles.reactLogo} />
          </div>
        </nav>
        <Routes>
          <Route path="mas-informacion" element={<MasInformacion />} />
          <Route path="consultas" element={<ConsultasApi />} />
          <Route path="agregar-juego" element={<AgregaJuego />} />
          <Route path="juegos" element={<Juegos />} />
          <Route path="juego-detallado" element={<JuegoDetallado />} />
          <Route path="/*" element={<Navigate to="/juegos" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
