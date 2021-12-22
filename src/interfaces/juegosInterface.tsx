export interface JuegosResponse {
  juegos: Juego[];
}

export interface Juego {
  id_juego: number;
  nombre: string;
  descripcion: string;
  desarrollador: string;
  edad_minima: number;
  cantidad_jugadores_minima: number;
  cantidad_jugadores_maxima: number;
  duracion: number;
  imagenes: string[];
}
