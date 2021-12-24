import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./buscador.module.css";
import { useEffect, useState } from "react";
import { useAutocomplete } from "../../hooks/useAutocomplete";
import { Juego } from "../../interfaces/autocompleteInterface";
import { useNavigate } from "react-router-dom";

export const Buscador = () => {
  const [state, setState] = useState({
    isBusquedaFocused: false,
    valorIngresado: "",
    sugerencias: Array<string>(),
    autocomplete: Array<Juego>(),
  });

  const { autocomplete } = useAutocomplete();

  const navigate = useNavigate();

  const handleNavigate = (nombre: string) => {
    navigate(`/juego-detallado?q=${nombre}`);
  };

  useEffect(() => {
    let sugerencias = Array<string>();
    const MAX_SUGERENCIAS = 7;
    autocomplete?.map((el) => {
      if (sugerencias.length < MAX_SUGERENCIAS) {
        sugerencias.push(el.nombre);
      }
    });
    setState({
      ...state,
      autocomplete: autocomplete ? autocomplete : [],
      sugerencias: sugerencias,
    });
  }, [autocomplete]);

  useEffect(() => {
    let sugerencias = Array<string>();
    let nombreJuego = "";
    let valor = "";
    const MAX_SUGERENCIAS = 7;
    state.autocomplete.map((juego: Juego) => {
      nombreJuego = juego.nombre.toLowerCase();
      valor = state.valorIngresado.toLocaleLowerCase();
      if (nombreJuego.includes(valor) && sugerencias.length < MAX_SUGERENCIAS) {
        sugerencias.push(juego.nombre);
      }
    });
    setState({ ...state, sugerencias: sugerencias });
  }, [state.valorIngresado]);

  return (
    <form action={`/juego-detallado`} className={styles.formBusqueda}>
      <span className={styles.spanBusqueda}>
        <FontAwesomeIcon icon={faSearch} className={styles.faSearch} />
      </span>
      <div className={styles.autocomplete}>
        <input
          className={`form-control ${styles.inputBusqueda}`}
          type="search"
          aria-label="Search"
          autoComplete="off"
          placeholder="Búsqueda"
          name="q"
          value={state.valorIngresado}
          onChange={(e) =>
            setState({ ...state, valorIngresado: e.target.value })
          }
          onFocus={(e) => setState({ ...state, isBusquedaFocused: true })}
          onBlur={(e) => setState({ ...state, isBusquedaFocused: false })}
        />
        <div
          className={styles.autocompleteItems}
          style={{ display: state.isBusquedaFocused ? "unset" : "none" }}>
          {state.sugerencias?.map((sugerencia: string) => {
            return (
              <div
                key={sugerencia}
                className={styles.autocompleteItem}
                onMouseDown={() => handleNavigate(sugerencia)}>
                <strong>{sugerencia}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};
