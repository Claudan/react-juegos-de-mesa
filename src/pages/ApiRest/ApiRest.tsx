import { useEffect, useState } from "react";
import { useAutocomplete } from "../../hooks/useAutocomplete";
import { Juego } from "../../interfaces/autocompleteInterface";
import styles from "./ApiRest.module.css";
import { CodigoJuegoDetallado } from "./CodigoJuegoDetallado";

export const ApiRest = () => {
  const { autocomplete } = useAutocomplete();
  const [state, setState] = useState({
    isBusquedaFocused: false,
    valorIngresado: "",
    sugerencias: Array<string>(),
    autocomplete: Array<Juego>(),
    consultado: "",
  });

  const handleConsulta = (consulta: string) => {
    setState({ ...state, consultado: consulta, valorIngresado: consulta });
  };

  useEffect(() => {
    let sugerencias = Array<string>();
    const MAX_SUGERENCIAS = 8;
    autocomplete?.map((el) => {
      if (sugerencias.length < MAX_SUGERENCIAS) {
        sugerencias.push(el.nombre);
      }
    });
    setState({
      ...state,
      autocomplete: autocomplete ? autocomplete : [],
      sugerencias: sugerencias,
      consultado: sugerencias.length > 0 ? sugerencias[0] : "",
      valorIngresado: sugerencias.length > 0 ? sugerencias[0] : "",
    });
  }, [autocomplete]);

  useEffect(() => {
    let sugerencias = Array<string>();
    let nombreJuego = "";
    let valor = "";
    const MAX_SUGERENCIAS = 8;
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
    <div className={styles.container}>
      <h3 className={styles.h3}>api rest</h3>
      <div className={`${styles.card} `}>
        <div className={`${styles.rowCard}`}>
          <div className={`${styles.cardBody}`}>
            <p className="card-text">
              Para este mini proyecto desarrollé un microservicio rest (tiene
              habilitado CORS), el cual provee los endpoints necesarios.
            </p>
            <p className="card-text">
              A continuación se muestra un ejemplo que permite consultar por un
              juego de mesa dado un nombre.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className={styles.h3}>Consultas por nombre del juego</h3>
        <div className={`${styles.card} `}>
          <div className={`${styles.rowCard}`}>
            <div className={`${styles.cardBody}`}>
              <div className={styles.autocomplete}>
                <input
                  type="text"
                  className={styles.buscador}
                  value={state.valorIngresado}
                  onChange={(e) =>
                    setState({ ...state, valorIngresado: e.target.value })
                  }
                  onFocus={(e) =>
                    setState({
                      ...state,
                      isBusquedaFocused: true,
                      valorIngresado: "",
                    })
                  }
                  onBlur={(e) =>
                    setState({ ...state, isBusquedaFocused: false })
                  }
                />
                <div
                  className={styles.autocompleteItems}
                  style={{
                    display: state.isBusquedaFocused ? "unset" : "none",
                  }}>
                  {state.sugerencias?.map((sugerencia: string) => {
                    return (
                      <div
                        key={sugerencia}
                        className={styles.autocompleteItem}
                        onMouseDown={() => handleConsulta(sugerencia)}>
                        <strong>{sugerencia}</strong>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.codigo}>
                {state.consultado !== "" ? (
                  <CodigoJuegoDetallado consultado={state.consultado} />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
