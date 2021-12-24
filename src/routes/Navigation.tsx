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
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { Arquitectura } from "../pages/Arquitectura/Arquitectura";

export const Navigation = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const [sidebarOpened, setSidebarOpened] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const openSidebar = () => {
    sidebarRef.current!.style.width = "250px";
    mainRef.current!.style.marginLeft = "250px";
    setSidebarOpened(true);
  };
  const closeSidebar = () => {
    sidebarRef.current!.style.width = "0px";
    mainRef.current!.style.marginLeft = "0px";
    setSidebarOpened(false);
  };

  const handleSidebar = () => {
    if (!sidebarOpened) {
      openSidebar();
    } else {
      closeSidebar();
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (width < 840) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }, [width]);

  return (
    <BrowserRouter>
      <div ref={sidebarRef} className={styles.sidebar}>
        <Sidebar />
      </div>
      <div ref={mainRef} className={`${styles.mainLayout} main-layout`}>
        <nav className={styles.nav}>
          <div className={styles.buscadorContainer}>
            <div onClick={handleSidebar}>
              <FontAwesomeIcon icon={faBars} className={styles.faBars} />
            </div>
            <Buscador />
          </div>
          <div className={styles.logo}>
            <img src={tsLogo} alt="Typescript" className={styles.tsLogo} />
            <FontAwesomeIcon icon={faPlus} className={styles.faPlus} />
            <img src={reactLogo} alt="React" className={styles.reactLogo} />
          </div>
        </nav>
        <Routes>
          <Route path="mas-informacion" element={<MasInformacion />} />
          <Route path="arquitectura" element={<Arquitectura />} />
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
