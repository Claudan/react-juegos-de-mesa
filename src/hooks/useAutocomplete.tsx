import { useState, useEffect } from "react";
import axios from "axios";
import {
  AutocompleteResponse,
  Juego,
} from "../interfaces/autocompleteInterface";

export const useAutocomplete = () => {
  const [autocomplete, setAutocomplete] = useState<Juego[]>();
  const [isLoading, setIsloading] = useState(true);

  const AutocompleteDB = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND}/buscador`,
  });

  const getNombresJuegos = async () => {
    AutocompleteDB.get<AutocompleteResponse>("/autocomplete").then((resp) => {
      setAutocomplete(resp.data.juegos);
      setIsloading(false);
    });
  };

  useEffect(() => {
    getNombresJuegos();
  }, []);

  return {
    autocomplete,
    isLoading,
  };
};
