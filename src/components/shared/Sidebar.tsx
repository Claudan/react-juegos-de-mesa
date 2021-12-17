import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGamepad,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <div className={styles.userContainer}>
        <div className={styles.avatarContainer}>
          <span className={styles.avatar}>UI</span>
        </div>
        <p className={styles.nombre}>Usuario Invitado</p>
      </div>
      <div className={styles.menu}>
        <p className={styles.tituloMenu}>Menu</p>
        <ul className={styles.ul}>
          <li>
            <NavLink to="juegos" end>
              <FontAwesomeIcon icon={faGamepad} className={styles.faGamepad} />
              Panel de juegos
            </NavLink>
          </li>
          <li>
            <NavLink to="agregar-juego" end>
              <FontAwesomeIcon icon={faPlus} className={styles.faPlus} />
              Agregar juego
            </NavLink>
          </li>
          <li>
            <NavLink to="sesion" end>
              <FontAwesomeIcon icon={faUser} className={styles.faUser} />
              Sesión de usuario
            </NavLink>
          </li>
          <li>
            <NavLink to="consultas" end>
              <FontAwesomeIcon icon={faCode} className={styles.faCode} />
              API REST
            </NavLink>
          </li>
          <li>
            <NavLink to="mas-informacion" end>
              <FontAwesomeIcon
                icon={faGithubAlt}
                className={styles.faGithubAlt}
              />
              Más info y Github
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
