import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <>
      <div className={styles.userContainer}>
        <div className={styles.avatarContainer}>
          <span className={styles.avatar}>CA</span>
        </div>
        <p className={styles.nombre}>Claudio Andrade</p>
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
              Más información
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
