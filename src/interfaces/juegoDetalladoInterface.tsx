export interface JuegoDetalladoResponse {
  juego: Juego;
}

export interface Juego {
  id_juego: number;
  nombre: string;
  desarrollador: string;
  descripcion: string;
  edad_minima: number;
  cantidad_jugadores_minima: number;
  cantidad_jugadores_maxima: number;
  duracion: number;
  imagenes: Imagenes[];
}

export interface Imagenes {
  ruta: string;
}
