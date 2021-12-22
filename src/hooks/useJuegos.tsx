import { useState, useEffect } from "react";
import axios from "axios";
import { Juego, JuegosResponse } from "../interfaces/juegosInterface";

export const useJuegos = () => {
  const [juegos, setJuegos] = useState<Juego[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const juegosDB = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND}/juego`,
  });

  const getJuegos = async () => {
    juegosDB.get<JuegosResponse>("/").then((resp) => {
      setJuegos(resp.data.juegos);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getJuegos();
  }, []);

  return {
    juegos,
    isLoading,
  };
};
