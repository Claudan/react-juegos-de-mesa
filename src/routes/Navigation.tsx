import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Juegos } from "../pages/Juegos/Juegos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";

import reactLogo from "../logo.svg";
import tsLogo from "../typescript.png";
import styles from "./Navigation.module.css";
import { Sidebar } from "../components/shared/Sidebar";
import { ApiRest } from "../pages/ApiRest/ApiRest";
import { MasInformacion } from "../pages/MasInformacion/MasInformacion";
import { AgregaJuego } from "../pages/AgregarJuego/AgregaJuego";
import { JuegoDetallado } from "../pages/JuegoDetallado/JuegoDetallado";
import { Buscador } from "../components/shared/Buscador";

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
          <Buscador />
          <div className={styles.logo}>
            <img src={tsLogo} alt="Typescript" className={styles.tsLogo} />
            <FontAwesomeIcon icon={faPlus} className={styles.faPlus} />
            <img src={reactLogo} alt="React" className={styles.reactLogo} />
          </div>
        </nav>
        <Routes>
          <Route path="mas-informacion" element={<MasInformacion />} />
          <Route path="consultas" element={<ApiRest />} />
          <Route path="agregar-juego" element={<AgregaJuego />} />
          <Route path="juegos" element={<Juegos />} />
          <Route path="juego-detallado" element={<JuegoDetallado />} />
          <Route path="/*" element={<Navigate to="/juegos" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
