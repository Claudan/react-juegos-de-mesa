import { useState, useEffect } from "react";
import axios from "axios";
import {
  Juego,
  JuegoDetalladoResponse,
} from "../interfaces/juegoDetalladoInterface";

export const useJuegoDetallado = (nombreJuego: string) => {
  const [juego, setJuego] = useState<Juego>();
  const [isLoading, setIsloading] = useState(true);

  const JuegoDB = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND}/juego`,
  });

  const getJuegoDetallado = async () => {
    JuegoDB.post<JuegoDetalladoResponse>("/getJuegoDetallado", {
      nombre: nombreJuego,
    }).then((resp) => {
      setJuego(resp.data.juego);
      setIsloading(false);
    });
  };

  useEffect(() => {
    getJuegoDetallado();
  }, [nombreJuego]);

  return {
    juego,
    isLoading,
  };
};
